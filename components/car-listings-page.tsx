"use client";

import { useState, useMemo, useCallback } from "react";
import type { CarListing } from "@/types/car";
import CarCard from "@/components/car-card";
import TrustedCarsSection from "@/components/trusted-cars-section";
import SortDropdown from "@/components/sort-dropdown";

interface CarListingsPageProps {
  initialListings: CarListing[];
}

export default function CarListingsPage({
  initialListings,
}: CarListingsPageProps) {
  const [listings, setListings] = useState(initialListings);
  const [sortBy, setSortBy] = useState("price-low-high");
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([]);

  const sortedListings = useMemo(() => {
    const sorted = [...listings]; // نسخ المصفوفة لمنع تعديل الأصلي
    switch (sortBy) {
      case "price-low-high":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high-low":
        return sorted.sort((a, b) => b.price - a.price);
      case "year-new-old":
        return sorted.sort((a, b) => b.year - a.year);
      case "mileage-low-high":
        return sorted.sort((a, b) => a.mileage - b.mileage);
      default:
        return sorted;
    }
  }, [listings, sortBy]);

  const handleCompareToggle = useCallback((carId: string) => {
    setSelectedForCompare((prev) => {
      if (prev.includes(carId)) {
        return prev.filter((id) => id !== carId);
      } else if (prev.length < 3) {
        return [...prev, carId];
      }
      // ممكن هنا تعرض رسالة أو تحاول ترفض الإضافة، حالياً نحتفظ بالمصفوفة بدون تغيير
      return prev;
    });
  }, []);

  const clearCompareSelection = useCallback(() => {
    setSelectedForCompare([]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                829 Used cars for sale in UAE
              </h2>
              <p className="text-gray-600 mt-1">
                {listings.length.toLocaleString()} cars available
              </p>
            </div>
            <SortDropdown value={sortBy} onChange={setSortBy} />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {sortedListings.length === 0 ? (
          <p className="text-center text-gray-500">
            No cars found matching criteria.
          </p>
        ) : (
          <div className="space-y-4 mb-12">
            {sortedListings.map((car, index) => (
              <CarCard
                key={car.id}
                car={car}
                priority={index < 3}
                isSelected={selectedForCompare.includes(car.id)}
                onCompareToggle={() => handleCompareToggle(car.id)}
              />
            ))}
          </div>
        )}

        <TrustedCarsSection />

        {selectedForCompare.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <span className="text-sm text-gray-600">
                {selectedForCompare.length} car
                {selectedForCompare.length > 1 ? "s" : ""} selected for
                comparison
              </span>
              <div className="flex gap-3">
                <button
                  onClick={clearCompareSelection}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Clear All
                </button>
                <button
                  disabled={selectedForCompare.length < 2}
                  className={`px-6 py-2 rounded-lg text-white transition-colors ${
                    selectedForCompare.length < 2
                      ? "bg-green-300 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  Compare Cars
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
