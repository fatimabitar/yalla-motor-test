"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

import type { CarListing } from "@/types/car";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Calendar,
  Fuel,
  Gauge,
  Globe,
  Heart,
  ImagesIcon,
  InfoIcon,
  MapPin,
  Phone,
  Settings,
} from "lucide-react";

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
  const handleCompareToggle = useCallback(() => {
    onCompareToggle();
  }, [onCompareToggle]);

  const carDetails = [
    {
      icon: <MapPin className="w-4 h-4" />,
      text: (
        <span className="hover:text-[#124d99] transition-all">
          {car.location}
        </span>
      ),
    },
    {
      icon: <Gauge className="w-4 h-4" />,
      text: (
        <span className="hover:text-[#124d99] transition-all">
          {car.mileage.toLocaleString()}
        </span>
      ),
    },
    {
      icon: <Calendar className="w-4 h-4" />,
      text: <span className="text-[#124d99] transition-all">{car.year}</span>,
    },
    {
      icon: <span className="text-gray-400">🔧</span>,
      text: <span>{car.engineSize}</span>,
    },
    {
      icon: <Settings className="w-4 h-4" />,
      text: (
        <span className="hover:text-[#124d99] transition-all">
          {car.transmission}
        </span>
      ),
    },
    {
      icon: <Fuel className="w-4 h-4" />,
      text: (
        <span className="hover:text-[#124d99] transition-all">
          {car.fuelType}
        </span>
      ),
    },
    {
      icon: <Globe className="w-4 h-4" />,
      text: (
        <span className="hover:text-[#124d99] transition-all">
          {car.gccSpecs ? "GCC Specs" : "Non-GCC"}
        </span>
      ),
    },
  ];

  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="px-2">
        <div className="flex flex-col lg:flex-row border-b">
          <div className="relative w-80 flex-shrink-0 p-3">
            <div className="relative h-[170px] w-full">
              <Image
                src={car.image || "/images/car-img-4.png"}
                alt={`${car.make} ${car.model} ${car.year}`}
                fill
                className="rounded-sm object-cover"
                loading="lazy"
              />
              {car.featured ? (
                <div className="absolute top-2 left-2 bg-[#a61d55] text-white px-2 py-1 rounded text-[10px] font-normal uppercase">
                  FEATURED
                </div>
              ) : car.gccSpecs ? (
                <div className="absolute top-2 left-2 bg-[#02831c] text-white px-2 py-1 rounded text-[10px] font-normal uppercase">
                  CERTIFIED
                </div>
              ) : null}
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold opacity-30">
              CARZILLA
            </div>
            <div className="absolute bottom-5 left-3 bg-[#858585] text-white px-2 py-1 rounded text-xs flex items-center gap-1">
              <ImagesIcon className="w-3 h-3" />
              {car.photoCount || 10}
            </div>
            <button className="absolute bottom-5 right-3 p-2 bg-white w-8 h-8 flex items-center justify-center shadow-md bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all">
              <Heart className="w-4 h-4 text-[#858585]" fill="#858585" />
            </button>
          </div>
          <div className="flex-1 p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-2xl font-bold text-[#3b3b3b] cursor-pointer hover:text-[#124d99] transition-all">
                    <span className="text-base">AED</span>{" "}
                    {car.price.toLocaleString()}
                  </div>
                  {car.dealType && (
                    <div className="flex items-center gap-1">
                      {car.dealType === "Great Deal" && (
                        <div className="flex items-center gap-1 bg-[#f1fcf5] rounded-sm p-1 text-[#10A058] font-bold text-[14px]">
                          <span className="bg-[#10a058] w-4 h-4 rounded-full flex items-center">
                            <ArrowUp className="w-5 h-5 text-[#f1fcf5] p-0.5" />
                          </span>
                          <span>Great Deal</span>
                        </div>
                      )}
                      {car.dealType === "Fair Deal" && (
                        <div className="flex items-center gap-1 bg-[#fffae7] rounded-sm p-1 text-[#FFB910] font-bold text-[14px]">
                          <span className="bg-[#ffb910] w-4 h-4 rounded-full flex items-center">
                            <ArrowRight className="w-5 h-5 text-[#fffae7] p-0.5" />
                          </span>
                          <span>Fair Deal</span>
                        </div>
                      )}
                      {car.dealType === "Good Deal" && (
                        <div className="flex items-center gap-1 text-[#167AD2] font-bold text-[14px]">
                          <span className="text-[#167AD2] bg-[#8bc2f3] w-4 h-4 rounded-full flex items-center">
                            <ArrowUpRight className="w-5 h-5 text-[#8bc2f3] p-0.5" />
                          </span>
                          <span>Good Deal</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="text-[#ffae42] text-sm flex items-center gap-1">
                  AED {car.monthlyPayment.toLocaleString()} Per month
                  <InfoIcon color="white" fill="#999" size={15} />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full sm:w-auto sm:min-w-[180px]">
                <button className="bg-[#124d99] hover:bg-blue-700 w-[200px] h-[30px] text-white px-4 py-2 rounded text-sm font-medium flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Show Number
                </button>
                <button className="bg-[#25d342] hover:bg-green-600 w-[200px] h-[30px] text-white px-4 py-2 rounded text-sm font-medium flex items-center justify-center gap-2">
                  <FaWhatsapp className="w-4 h-4" />
                  Whatsapp
                </button>
              </div>
            </div>
            <h2 className="text-base font-bold text-[#3b3b3b] mb-2 cursor-pointer hover:text-[#124d99] transition-all">
              Used {car.make} {car.model} {car.variant} {car.year}
            </h2>
            <div className="mb-2 !text-gray-400 text-sm font-normal">
              {car.description.includes("Vehicle Description") ? (
                <p>
                  <span className="inline-flex items-center gap-1">
                    <InfoIcon className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-600 font-medium">
                      Vehicle Description
                    </span>
                  </span>{" "}
                  {car.description.replace("Vehicle Description", "")}
                </p>
              ) : (
                <p className="!text-[#868686] text-sm font-normal line-clamp-2">
                  {car.description}
                </p>
              )}
            </div>
            <div className="flex">
              <div className="flex-1 flex flex-wrap items-center text-sm text-[#3b3b3b] font-bold mb-2">
                {carDetails.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-1 px-2 ${
                      index !== 0 ? "border-l border-gray-300" : ""
                    }`}
                  >
                    {item.icon}
                    {item.text}
                  </div>
                ))}
              </div>
              <div className="mr-5">
                <Image
                  src="/images/approved.png"
                  alt="A nice car"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mt-3 px-3 border-b pb-3">
            <div className="flex items-center gap-2 text-[10px]">
              {car.canBeExported && (
                <span className="bg-[#497285] text-white px-2 py-1 rounded">
                  Can be exported
                </span>
              )}
              {car.urgent && (
                <span className="bg-[#f0f0f0] text-black px-2 py-1 rounded">
                  Urgent
                </span>
              )}
            </div>
            <div className="flex items-center gap-4">
              <label className="gap-2 text-sm bg-[#f0f0f0] w-[150px] flex items-center justify-center text-[#3b3b3b] rounded-sm py-0.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={handleCompareToggle}
                  className="appearance-none w-3 h-3 border border-gray-700 rounded-sm bg-[#f0f0f0] checked:bg-[#124d99] checked:border-[#124d99] checked:bg-check-icon bg-center bg-no-repeat focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#124d99]"
                  style={{
                    backgroundImage: isSelected
                      ? `url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.285 6.709a1 1 0 00-1.414-1.414l-9.192 9.193-4.243-4.243a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l10-10z'/%3E%3C/svg%3E")`
                      : undefined,
                  }}
                />
                Compare
              </label>
            </div>
          </div>
          <div className="py-1">
            <a href="#" className="text-xs !underline">
              Do you have a similar {car.make} {car.model} to sell in{" "}
              {car.location}?
              <span className="text-[#004DAD]"> Sell it yourself!</span>
            </a>
            {car.updatedDate && (
              <div className="mt-2 text-right">
                <p className="text-gray-400 text-xs">
                  Updated on {car.updatedDate}
                </p>
              </div>
            )}
            {car.promotionalText && (
              <div className="mt-2">
                <p className="text-gray-500 text-xs">{car.promotionalText}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
});

export default CarCard;
