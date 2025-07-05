"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export default function SellYourCarSection() {
  return (
    <section className="px-3 mb-12">
      <div className="max-w-7xl mx-auto text-[#3b3b3b]">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-black">
            Do you want to sell your car for{" "}
            <span className="text-[#124d99]">FREE</span>?
          </h2>
          <p className="text-base">
            We have everything that makes it easier for you to sell your car on
            our platform quickly
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="relative z-10 w-80 h-48 flex items-center justify-center">
                <Image
                  src="/images/sell.png"
                  alt="Sell your car"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="bg-[#ebf1fc] p-1 rounded-full shadow">
                  <Check className="w-3 h-3 text-blue-600" />
                </span>
                <p className=" text-sm">
                  Sell your car <span className="font-bold">100%</span>{" "}
                  absolutely free on YallaMotor.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-[#ebf1fc] p-1 rounded-full shadow">
                  <Check className="w-3 h-3 text-blue-600" />
                </span>
                <p className=" text-sm">
                  <span className="font-bold">200+</span> Cars Sold Everyday.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-[#ebf1fc] p-1 rounded-full shadow">
                  <Check className="w-3 h-3 text-blue-600" />
                </span>
                <p className=" text-sm">
                  <span className="font-bold">113,000+</span> Satisfied Sellers.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-[#ebf1fc] p-1 rounded-full shadow">
                  <Check className="w-3 h-3 text-blue-600" />
                </span>
                <p className=" text-sm">
                  <span className="font-bold">500,000+</span> Monthly Buyers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 relative flex items-center justify-center">
          <div className="absolute left-[calc(50%-200px)]">
            <svg width="57.357" height="58.324" viewBox="0 0 57.357 58.324">
              <path
                d="M-590.363-61.238a42.739,42.739,0,0,1,.264-4.727c2.3,16.44,19.5,32.151,40.409,32.225v-9.12l16.684,17.609L-549.69-7.641v-9.124C-572.167-16.859-590.363-38.351-590.363-61.238Z"
                transform="translate(590.363 65.965)"
                fill="#d8d8d8"
              />
            </svg>
          </div>
          <button className="bg-[#25d366] hover:bg-green-600 text-white font-bold text-base px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
            SELL YOUR CAR FOR FREE
          </button>
          <div className="absolute right-[calc(50%-200px)]">
            <svg width="57.357" height="58.324" viewBox="0 0 57.357 58.324">
              <path
                d="M-533.006-61.238a42.739,42.739,0,0,0-.264-4.727c-2.3,16.44-19.5,32.151-40.409,32.225v-9.12l-16.684,17.61,16.684,17.61v-9.124C-551.2-16.859-533.006-38.351-533.006-61.238Z"
                transform="translate(590.363 65.965)"
                fill="#d8d8d8"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
