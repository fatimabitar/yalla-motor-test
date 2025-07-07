"use client";

import Image from "next/image";
import { Check, ArrowRight, Users, TrendingUp, Shield } from "lucide-react";

export default function SellYourCarSection() {
  const stats = [
    {
      icon: Check,
      number: "100%",
      label: "Free Service",
      description: "No hidden fees or charges",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      number: "200+",
      label: "Daily Sales",
      description: "Cars sold every day",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      number: "113K+",
      label: "Happy Sellers",
      description: "Satisfied with our service",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Shield,
      number: "500K+",
      label: "Monthly Buyers",
      description: "Active car shoppers",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl overflow-hidden mb-12 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-600 rounded-full -translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-600 rounded-full translate-x-16 translate-y-16"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-600 rounded-full -translate-x-12 -translate-y-12"></div>
      </div>

      <div className="relative p-8 lg:p-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#3b3b3b] mb-4">
            Sell Your Car for <span className="text-blue-600">FREE</span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied sellers and get the best value for your
            car with our trusted platform
          </p>
        </div>

        {/* Image Section - Centered and Prominent */}
        <div className="flex justify-center mb-12 w-full">
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute opacity-75 inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl transform rotate-3 scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl transform -rotate-2 scale-110"></div>
            {/* Main image container */}
            <div className="relative">
              <div className="">
                <div className="relative h-32 w-64">
                  <Image
                    src="/images/sell.png"
                    alt="Sell your car illustration"
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            ;
          </div>
        </div>

        {/* Stats Grid - Below Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group text-center"
            >
              {/* Icon with gradient background */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              {/* Number */}
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-lg font-semibold text-gray-800 mb-1">
                {stat.label}
              </div>

              {/* Description */}
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-lg px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-4 mx-auto group">
            SELL YOUR CAR FOR FREE
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Additional info */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No registration required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Get started in 2 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Trusted by 113K+ sellers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
