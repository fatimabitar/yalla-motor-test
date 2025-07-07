"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Camera,
  Check,
  Images,
} from "lucide-react";
import { trustedCarsData } from "@/lib/trusted-cars-data";

export default function TrustedCarsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative mb-8">
      <div className="rounded-lg border-2 border-blue-600 pt-12 pb-8 px-4 sm:px-6 md:px-8 relative">
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
          <div className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm sm:text-base">
            Trusted Cars
          </div>
        </div>

        <div className="absolute top-6 right-4 sm:right-8">
          <a
            href="#"
            className="text-blborder-blue-600 hover:underline font-bold text-sm sm:text-base"
          >
            View All
          </a>
        </div>

        <h2 className="text-center text-[#3b3b3b] text-base sm:text-lg my-4">
          To Ensure you Buy with Confidence
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 mb-10">
          {["1 Year Warranty", "7 Day Return", "240 Point Inspection"].map(
            (label) => (
              <div
                key={label}
                className="flex items-center gap-2 text-[#3b3b3b] text-sm sm:text-base"
              >
                <div className="w-5 h-5 rounded-full flex items-center justify-center bg-white">
                  <Check className="w-3 h-3 text-blue-600" />
                </div>
                <span>{label}</span>
              </div>
            )
          )}
        </div>

        {/* Hide scroll buttons on small screens */}
        <div className="hidden sm:block">
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white border shadow-md rounded-full p-2 sm:p-3 hover:bg-gray-50 z-10"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-blborder-blue-600" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 sm:p-3 hover:bg-gray-50 z-10"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-blborder-blue-600" />
          </button>
        </div>

        <div className="px-2 sm:px-4">
          <div
            ref={scrollRef}
            className="flex gap-6 sm:gap-10 md:gap-20 pl-2 sm:pl-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {trustedCarsData.map((car) => (
              <div
                key={car.id}
                className="flex-shrink-0 w-60 sm:w-[200px] h-80 bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow snap-start"
              >
                <div className="relative h-40">
                  <Image
                    src={car.image || "/images/car-img-5.png"}
                    alt={`${car.make} ${car.model}`}
                    fill
                    className="object-cover"
                    sizes="320px"
                    loading="lazy"
                  />

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold opacity-20">
                    YallaMotor
                  </div>

                  <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                    <Images className="w-3 h-3" />
                    {car.photoCount}
                  </div>

                  {car.approved && (
                    <div className="absolute bottom-3 right-3 text-white text-2xl sm:text-4xl font-bold opacity-60">
                      approved
                    </div>
                  )}
                </div>

                <div className="p-2">
                  <h3 className="font-bold hover:text-blborder-blue-600 transition-all text-[#3b3b3b] mb-3 text-sm cursor-pointer">
                    Used {car.make} {car.model} {car.year}
                  </h3>

                  <div className="text-sm font-bold text-blborder-blue-600 mb-1">
                    AED {car.price.toLocaleString()}
                  </div>

                  <div className="flex items-center gap-2 text-[#868686] text-sm mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>{car.location}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-1 text-sm text-[#3b3b3b]">
                    <span>{car.mileage.toLocaleString()} KM</span>
                    <span>|</span>
                    <span>{car.fuelType}</span>
                    <span>|</span>
                    <span>{car.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
