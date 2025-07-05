"use client";

import { useState, lazy, Suspense, useEffect, useCallback, memo } from "react";
import { Search, ChevronDown, SlidersHorizontal } from "lucide-react";
import BreadcrumbNavigation from "./bread-crumps-navigation";
import YearRangeDropdown from "./year-range-modal";

const BrandSelectionModal = lazy(() => import("./brand-selection-modal"));
const PriceRangeDropdown = lazy(() => import("./price-range-modal"));
const MileageRangeDropdown = lazy(() => import("./MileageRangeDropdown"));
const BodyTypesDropdown = lazy(() => import("./body-types-modal"));

interface SearchFilters {
  city: string;
  brand: string;
  model: string;
  priceMin: string;
  priceMax: string;
  yearMin: string;
  yearMax: string;
  mileageMin: string;
  mileageMax: string;
  bodyTypes: string[];
}

const UAE_CITIES = [
  "All Cities",
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
  "Fujairah",
  "Umm Al Quwain",
  "Al Ain",
];

const CityDropdown = memo(
  ({
    isOpen,
    onSelect,
    currentCity,
  }: {
    isOpen: boolean;
    onSelect: (city: string) => void;
    currentCity: string;
  }) => (
    <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-sm shadow-lg z-10">
      {UAE_CITIES.map((city) => (
        <button
          key={city}
          onClick={() => onSelect(city)}
          className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
            city === currentCity ? "bg-gray-100 font-medium" : ""
          }`}
        >
          {city}
        </button>
      ))}
    </div>
  )
);
CityDropdown.displayName = "CityDropdown";

const FilterButton = memo(
  ({
    onClick,
    displayText,
    isActive,
    disabled,
    icon,
    widthClass = "w-[225px]",
    hasChevron = true,
  }: {
    onClick: () => void;
    displayText: string;
    isActive: boolean;
    disabled?: boolean;
    icon?: React.ReactNode;
    widthClass?: string;
    hasChevron?: boolean;
  }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${widthClass} h-[42px] px-4 py-2 border rounded-sm bg-white text-sm ${
        isActive ? "border-gray-400" : "border-[#dadada] hover:border-gray-400"
      } transition-colors flex items-center justify-between shadow-sm ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      }`}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span className={isActive ? "text-[#3b3b3b]" : "text-gray-500"}>
          {displayText}
        </span>
      </div>
      {hasChevron && <ChevronDown className="w-5 h-5" />}
    </button>
  )
);
FilterButton.displayName = "FilterButton";

export default function SearchFilterBar() {
  const [filters, setFilters] = useState<SearchFilters>({
    city: "All Cities",
    brand: "",
    model: "",
    priceMin: "",
    priceMax: "",
    yearMin: "",
    yearMax: "",
    mileageMin: "",
    mileageMax: "",
    bodyTypes: [],
  });

  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleScroll = useCallback(() => {
    if (isMobile) return;

    const scrollY = window.scrollY;
    const hideThreshold = 300;
    const fadeDistance = 50;

    if (scrollY <= hideThreshold) {
      setIsSticky(true);
      setOpacity(1);
    } else if (
      scrollY > hideThreshold &&
      scrollY < hideThreshold + fadeDistance
    ) {
      setIsSticky(true);
      const fadeProgress = (scrollY - hideThreshold) / fadeDistance;
      setOpacity(1 - fadeProgress);
    } else {
      setIsSticky(false);
      setOpacity(0);
    }
  }, [isMobile]);

  useEffect(() => {
    const debouncedHandleScroll = () => {
      let timeoutId: NodeJS.Timeout;
      return function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => handleScroll(), 10);
      };
    };

    window.addEventListener("scroll", debouncedHandleScroll());
    return () => window.removeEventListener("scroll", debouncedHandleScroll());
  }, [handleScroll]);

  const handleFilterChange = useCallback(
    (key: keyof SearchFilters, value: any) => {
      setFilters((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const clearAllFilters = useCallback(() => {
    setFilters({
      city: "All Cities",
      brand: "",
      model: "",
      priceMin: "",
      priceMax: "",
      yearMin: "",
      yearMax: "",
      mileageMin: "",
      mileageMax: "",
      bodyTypes: [],
    });
  }, []);

  const getDisplayText = useCallback(
    (key: string) => {
      switch (key) {
        case "brand":
          return filters.brand || "Select car make/brand";
        case "model":
          return filters.model || "Select Model";
        case "price":
          if (filters.priceMin || filters.priceMax) {
            return `AED ${filters.priceMin || "0"} - ${
              filters.priceMax || "∞"
            }`;
          }
          return "Price Range";
        case "year":
          if (filters.yearMin || filters.yearMax) {
            return `${filters.yearMin || "Any"} - ${filters.yearMax || "Any"}`;
          }
          return "Year Range";
        case "mileage":
          if (filters.mileageMin || filters.mileageMax) {
            return `${filters.mileageMin || "0"} - ${
              filters.mileageMax || "∞"
            } KM`;
          }
          return "Mileage Range";
        case "bodyTypes":
          if (filters.bodyTypes.length > 0) {
            return filters.bodyTypes.length === 1
              ? filters.bodyTypes[0]
              : `${filters.bodyTypes.length} selected`;
          }
          return "Body Types";
        default:
          return "";
      }
    },
    [filters]
  );

  const handleCitySelect = useCallback(
    (city: string) => {
      handleFilterChange("city", city);
      setIsCityDropdownOpen(false);
    },
    [handleFilterChange]
  );

  return (
    <>
      <div
        className={`${
          isMobile ? "relative" : isSticky ? "sticky" : "relative"
        } top-0 z-30 bg-[#fcfcfc] border-b border-gray-200 py-6 w-full transition-opacity duration-300 shadow-md`}
        style={{ opacity: isMobile ? 1 : opacity }}
      >
        <div className="mx-auto max-w-[95%] px-4">
          <BreadcrumbNavigation />

          {isMobile && (
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="w-full bg-[#124d99] text-white py-2 px-4 rounded mb-4"
            >
              {isCollapsed ? "Show Filters" : "Hide Filters"}
            </button>
          )}

          {(!isMobile || !isCollapsed) && (
            <>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="relative">
                  <FilterButton
                    onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                    displayText={filters.city}
                    isActive={isCityDropdownOpen}
                    widthClass="w-full md:w-[225px]"
                  />
                  {isCityDropdownOpen && (
                    <CityDropdown
                      isOpen={isCityDropdownOpen}
                      onSelect={handleCitySelect}
                      currentCity={filters.city}
                    />
                  )}
                </div>

                <div className="relative flex-1">
                  <FilterButton
                    onClick={() => setActiveModal("brand")}
                    displayText={getDisplayText("brand")}
                    isActive={activeModal === "brand"}
                    icon={<Search className="w-4 h-4 text-gray-400" />}
                    widthClass="w-full md:w-[465px]"
                    hasChevron={false}
                  />
                </div>

                <div className="relative flex-1">
                  <FilterButton
                    onClick={() => filters.brand && setActiveModal("model")}
                    displayText={getDisplayText("model")}
                    isActive={activeModal === "model"}
                    disabled={!filters.brand}
                    icon={<Search className="w-4 h-4 text-gray-400" />}
                    widthClass="w-full md:w-[465px]"
                    hasChevron={false}
                  />
                </div>

                <button className="bg-[#124d99] hover:bg-blue-700 text-white w-full md:w-[250px] h-[42px] font-bold px-8 py-2 rounded-sm transition-colors shadow-sm">
                  Search
                </button>
              </div>

              <div className="flex flex-wrap gap-4 items-center relative">
                <div className="relative w-full md:w-auto">
                  <FilterButton
                    onClick={() => setActiveModal("price")}
                    displayText={getDisplayText("price")}
                    isActive={activeModal === "price"}
                    widthClass="w-full md:w-[225px]"
                  />
                  {activeModal === "price" && (
                    <Suspense
                      fallback={
                        <div className="absolute z-10 bg-white p-4 shadow-md">
                          Loading...
                        </div>
                      }
                    >
                      <PriceRangeDropdown
                        onClose={() => setActiveModal(null)}
                        priceMin={filters.priceMin}
                        priceMax={filters.priceMax}
                        onApply={(min, max) => {
                          handleFilterChange("priceMin", min);
                          handleFilterChange("priceMax", max);
                        }}
                      />
                    </Suspense>
                  )}
                </div>

                <div className="relative w-full md:w-auto">
                  <FilterButton
                    onClick={() => setActiveModal("year")}
                    displayText={getDisplayText("year")}
                    isActive={activeModal === "year"}
                    widthClass="w-full md:w-[225px]"
                  />
                  {activeModal === "year" && (
                    <Suspense
                      fallback={
                        <div className="absolute z-10 bg-white p-4 shadow-md">
                          Loading...
                        </div>
                      }
                    >
                      <YearRangeDropdown
                        onClose={() => setActiveModal(null)}
                        yearMin={filters.yearMin}
                        yearMax={filters.yearMax}
                        onApply={(min, max) => {
                          handleFilterChange("yearMin", min);
                          handleFilterChange("yearMax", max);
                        }}
                      />
                    </Suspense>
                  )}
                </div>

                <div className="relative w-full md:w-auto">
                  <FilterButton
                    onClick={() => setActiveModal("mileage")}
                    displayText={getDisplayText("mileage")}
                    isActive={activeModal === "mileage"}
                    widthClass="w-full md:w-[225px]"
                  />
                  {activeModal === "mileage" && (
                    <Suspense
                      fallback={
                        <div className="absolute z-10 bg-white p-4 shadow-md">
                          Loading...
                        </div>
                      }
                    >
                      <MileageRangeDropdown
                        onClose={() => setActiveModal(null)}
                        mileageMin={filters.mileageMin}
                        mileageMax={filters.mileageMax}
                        onApply={(min, max) => {
                          handleFilterChange("mileageMin", min);
                          handleFilterChange("mileageMax", max);
                        }}
                      />
                    </Suspense>
                  )}
                </div>

                <div className="relative w-full md:w-auto">
                  <FilterButton
                    onClick={() =>
                      setActiveModal(
                        activeModal === "bodyTypes" ? null : "bodyTypes"
                      )
                    }
                    displayText={getDisplayText("bodyTypes")}
                    isActive={activeModal === "bodyTypes"}
                    widthClass="w-full md:w-[225px]"
                  />
                  {activeModal === "bodyTypes" && (
                    <Suspense
                      fallback={
                        <div className="absolute z-10 bg-white p-4 shadow-md"></div>
                      }
                    >
                      <BodyTypesDropdown
                        selectedTypes={filters.bodyTypes}
                        onApply={(types) =>
                          handleFilterChange("bodyTypes", types)
                        }
                        onClose={() => setActiveModal(null)}
                      />
                    </Suspense>
                  )}
                </div>

                <FilterButton
                  onClick={() => setActiveModal("moreFilters")}
                  displayText="More Filters"
                  isActive={activeModal === "moreFilters"}
                  icon={<SlidersHorizontal className="w-4 h-4" />}
                  widthClass="w-full md:w-[225px]"
                  hasChevron={false}
                />

                <button
                  onClick={clearAllFilters}
                  className="w-full md:w-fit px-4 md:px-14 py-2 h-[42px] text-[#3b3b3b] hover:text-gray-800 transition-colors text-sm md:text-base"
                >
                  Clear All
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {activeModal === "brand" && (
        <Suspense
          fallback={
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"></div>
          }
        >
          <BrandSelectionModal
            isOpen={true}
            onClose={() => setActiveModal(null)}
            selectedBrand={filters.brand}
            onSelectBrand={(brand) => handleFilterChange("brand", brand)}
          />
        </Suspense>
      )}
    </>
  );
}
