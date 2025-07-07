"use client";

import { useState, lazy, Suspense } from "react";
import CarCard from "@/components/car-card";
import SortDropdown from "@/components/sort-dropdown";
import { mockCarListings } from "@/lib/mock-data";

const TrustedCarsSection = lazy(
  () => import("@/components/trusted-cars-section")
);
const SellYourCarSection = lazy(
  () => import("@/components/sell-your-car-section")
);
const YallamotorServicesSection = lazy(
  () => import("@/components/yallamotor-services-section")
);
const SearchSections = lazy(() => import("@/components/search-sections"));
const PopularBrandsSection = lazy(
  () => import("@/components/popular-brands-section")
);
const CompareButton = lazy(() => import("@/components/compare-button"));
const Pagination = lazy(() => import("@/components/pagination"));

export default function CarListingsSection() {
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("price-low-high");

  const handleCompareToggle = (carId: string) => {
    setSelectedForCompare((prev) =>
      prev.includes(carId)
        ? prev.filter((id) => id !== carId)
        : [...prev, carId].slice(0, 3)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 rounded-lg">
      {/* Modern Header Section */}
      <div className="sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-gray-900">
                Used Cars in UAE
              </h2>
              <p className="text-gray-600">
                <span className="font-semibold text-blue-600">829 cars</span>{" "}
                available •<span className="ml-1">Showing 1-10 results</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <SortDropdown value={sortBy} onChange={setSortBy} />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* First Section */}
        <div className="space-y-6 mb-12">
          {mockCarListings.slice(0, 5).map((car, index) => (
            <CarCard
              key={car.id}
              car={car}
              priority={index < 2}
              isSelected={selectedForCompare.includes(car.id)}
              onCompareToggle={() => handleCompareToggle(car.id)}
            />
          ))}
        </div>

        <Suspense
          fallback={
            <div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>
          }
        >
          <TrustedCarsSection />
        </Suspense>

        <div className="space-y-6 mt-12 mb-12">
          {mockCarListings.slice(5, 9).map((car, index) => (
            <CarCard
              key={car.id}
              car={car}
              priority={false}
              isSelected={selectedForCompare.includes(car.id)}
              onCompareToggle={() => handleCompareToggle(car.id)}
            />
          ))}
        </div>

        <Suspense
          fallback={
            <div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>
          }
        >
          <SellYourCarSection />
        </Suspense>

        <Suspense
          fallback={
            <div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>
          }
        >
          <YallamotorServicesSection />
        </Suspense>

        <div className="space-y-6 mt-12 mb-12">
          {mockCarListings.slice(9, 13).map((car, index) => (
            <CarCard
              key={car.id}
              car={car}
              priority={false}
              isSelected={selectedForCompare.includes(car.id)}
              onCompareToggle={() => handleCompareToggle(car.id)}
            />
          ))}
        </div>

        <div className="space-y-6">
          {mockCarListings.slice(13, 18).map((car, index) => (
            <CarCard
              key={car.id}
              car={car}
              priority={false}
              isSelected={selectedForCompare.includes(car.id)}
              onCompareToggle={() => handleCompareToggle(car.id)}
            />
          ))}
        </div>

        <Suspense
          fallback={
            <div className="h-16 bg-gray-100 animate-pulse rounded-lg"></div>
          }
        >
          <Pagination />
        </Suspense>

        <Suspense
          fallback={
            <div className="h-16 bg-gray-100 animate-pulse rounded-lg"></div>
          }
        >
          <CompareButton count={selectedForCompare.length} />
        </Suspense>
      </div>

      <Suspense
        fallback={
          <div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>
        }
      >
        <SearchSections />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>
        }
      >
        <PopularBrandsSection />
      </Suspense>
    </div>
  );
}
