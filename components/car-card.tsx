"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  MapPin,
  Gauge,
  Calendar,
  Settings,
  Fuel,
  Globe,
  Camera,
  Heart,
  ChevronDown,
  ChevronUp,
  Check,
  TrendingUp,
  Minus,
  Plane,
  Clock,
  Star,
  Shield,
} from "lucide-react";
import type { CarListing } from "@/types/car";

interface CarCardProps {
  car: CarListing;
  priority?: boolean;
  isSelected: boolean;
  onCompareToggle: () => void;
}

const CarCard = React.memo(function CarCard({
  car,
  priority = false,
  isSelected,
  onCompareToggle,
}: CarCardProps) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleCompareToggle = useCallback(() => {
    onCompareToggle();
  }, [onCompareToggle]);

  const toggleDescription = useCallback(() => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  }, [isDescriptionExpanded]);

  const toggleLike = useCallback(() => {
    setIsLiked(!isLiked);
  }, [isLiked]);

  const getDealBadge = () => {
    if (!car.dealType) return null;

    const badgeConfig = {
      "Great Deal": {
        bg: "bg-gradient-to-r from-emerald-500 to-emerald-600",
        icon: TrendingUp,
        glow: "shadow-emerald-500/25",
      },
      "Good Deal": {
        bg: "bg-gradient-to-r from-blue-500 to-blue-600",
        icon: TrendingUp,
        glow: "shadow-blue-500/25",
      },
      "Fair Deal": {
        bg: "bg-gradient-to-r from-amber-500 to-amber-600",
        icon: Minus,
        glow: "shadow-amber-500/25",
      },
    };

    const config = badgeConfig[car.dealType];
    if (!config) return null;

    return (
      <div
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-bold ${config.bg} ${config.glow} shadow-lg`}
      >
        <config.icon className="w-3.5 h-3.5" />
        {car.dealType}
      </div>
    );
  };

  const specs = [
    { icon: MapPin, value: car.location, color: "text-slate-600" },
    {
      icon: Gauge,
      value: `${car.mileage.toLocaleString()} KM`,
      color: "text-slate-600",
    },
    { icon: Calendar, value: car.year.toString(), color: "text-slate-600" },
    { icon: Settings, value: car.transmission, color: "text-slate-600" },
    { icon: Fuel, value: car.fuelType, color: "text-slate-600" },
    {
      icon: Globe,
      value: car.gccSpecs ? "GCC" : "Non-GCC",
      color: "text-slate-600",
    },
  ];

  const truncatedDescription =
    car.description.length > 100
      ? car.description.substring(0, 100) + "..."
      : car.description;

  return (
    <article className="bg-white rounded-xl shadow-sm border border-slate-200/60 overflow-hidden hover:shadow-xl hover:shadow-slate-200/40 hover:border-slate-300/60 transition-all duration-300 group relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex flex-col lg:flex-row relative">
        {/* Enhanced Image Section */}
        <div className="relative w-full lg:w-72 h-64 flex-shrink-0 overflow-hidden">
          <Image
            src={car.image || "/placeholder.svg?height=176&width=288"}
            alt={`${car.make} ${car.model} ${car.year}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 288px"
          />

          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />

          {/* Enhanced Top Badge */}
          {car.featured ? (
            <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-sm">
              <Star className="w-3.5 h-3.5 fill-current" />
              FEATURED
            </div>
          ) : car.gccSpecs ? (
            <div className="absolute top-3 left-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-sm">
              <Shield className="w-3.5 h-3.5" />
              CERTIFIED
            </div>
          ) : null}

          {/* Enhanced Heart Button */}
          <button
            onClick={toggleLike}
            className="absolute top-3 right-3 w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg"
          >
            <Heart
              className={`w-4.5 h-4.5 transition-all duration-200 ${
                isLiked
                  ? "text-red-500 fill-red-500 scale-110"
                  : "text-slate-600"
              }`}
            />
          </button>

          {/* Enhanced Photo Count */}
          <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 shadow-lg">
            <Camera className="w-3.5 h-3.5" />
            {car.photoCount || 10}
          </div>
        </div>

        {/* Enhanced Content Section */}
        <div className="flex-1 p-5">
          {/* Price Row with Better Typography */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <div className="text-2xl font-bold text-[#3b3b3b] tracking-tight">
                AED {car.price.toLocaleString()}
              </div>
              <div className="text-xs text-[#FFAE42] font-medium mt-0.5">
                AED {car.monthlyPayment.toLocaleString()}/month
              </div>
            </div>
            {getDealBadge()}
          </div>

          {/* Enhanced Car Title */}
          <h3 className="text-lg font-semibold text-[#3b3b3b] mb-4 hover:text-blue-600 transition-colors cursor-pointer line-clamp-1 tracking-tight">
            Used {car.make} {car.model} {car.variant} {car.year}
          </h3>

          <div
            className="space-y-3 mb-5"
            role="list"
            aria-label="Vehicle specifications"
          >
            <div className="grid grid-cols-2 gap-4">
              {specs.slice(0, 4).map((spec, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                  role="listitem"
                >
                  <div
                    className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    <spec.icon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <div
                      className="text-sm font-semibold text-gray-900"
                      aria-label={`${spec.value} specification`}
                    >
                      {spec.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {specs.slice(4).map((spec, index) => (
                <div
                  key={index + 4}
                  className="flex items-center gap-3"
                  role="listitem"
                >
                  <div
                    className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    <spec.icon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      {spec.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Description */}
          <div className="mb-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              {isDescriptionExpanded ? car.description : truncatedDescription}
            </p>
            {car.description.length > 100 && (
              <button
                onClick={toggleDescription}
                className="text-blue-600 hover:text-blue-700 text-sm font-semibold mt-2 flex items-center gap-1 transition-colors group/expand"
              >
                {isDescriptionExpanded ? (
                  <>
                    Show less{" "}
                    <ChevronUp className="w-4 h-4 group-hover/expand:translate-y-0.5 transition-transform" />
                  </>
                ) : (
                  <>
                    Read more{" "}
                    <ChevronDown className="w-4 h-4 group-hover/expand:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>
            )}
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex gap-3 mb-4">
            <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              <Phone className="w-4 h-4" />
              Call Now
            </button>
            <button className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-2.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
          </div>

          {/* Enhanced Bottom Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {car.canBeExported && (
                <span className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-blue-200/50">
                  <Plane className="w-3.5 h-3.5" />
                  Export
                </span>
              )}
              {car.urgent && (
                <span className="bg-red-50 text-red-700 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-red-200/50">
                  <Clock className="w-3.5 h-3.5" />
                  Urgent
                </span>
              )}
            </div>

            <div className="flex items-center gap-4">
              {car.updatedDate && (
                <span className="text-xs text-slate-500 hidden lg:block font-medium">
                  Updated {car.updatedDate}
                </span>
              )}

              <label className="flex items-center gap-2 cursor-pointer group/compare">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={handleCompareToggle}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all duration-200 ${
                      isSelected
                        ? "bg-blue-600 border-blue-600 scale-110 shadow-lg shadow-blue-500/25"
                        : "border-slate-300 group-hover/compare:border-blue-400 group-hover/compare:scale-105"
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 text-white" />}
                  </div>
                </div>
                <span className="text-sm font-semibold text-slate-700 group-hover/compare:text-blue-600 transition-colors">
                  Compare
                </span>
              </label>
            </div>
          </div>

          {/* Enhanced Promotional Text */}
          {car.promotionalText && (
            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-xs text-blue-600 font-medium italic bg-blue-50/50 px-3 py-2 rounded-lg">
                {car.promotionalText}
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
});

export default CarCard;
