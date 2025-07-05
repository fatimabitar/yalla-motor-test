import type { Metadata } from "next";
import CarListingsSection from "@/components/car-listings-section";
import CreateAlertSidebar from "@/components/create-alert";
import SearchFilterBar from "@/components/search-filters-bar";

export const metadata: Metadata = {
  title: "Used Cars for Sale in UAE | YallaMotor",
  description:
    "Find the best used cars for sale in UAE. Browse thousands of verified cars with warranty, financing options, and trusted dealers.",
  keywords:
    "used cars UAE, cars for sale, Dubai cars, Abu Dhabi cars, car marketplace, YallaMotor",
  openGraph: {
    title: "Used Cars for Sale in UAE",
    description:
      "34827 used cars for sale found. Check Certified Pre-owned, New, and Used cars on YallaMotor.",
    images: ["/images/car-section-reference.png"],
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <div>
      <SearchFilterBar />
      <section className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-2">
          829 Used cars for sale in UAE
        </h2>
        <p className="text-[#3b3b3b] text-sm mb-6">
          829 used cars for sale found. Check{" "}
          <a href="#" className="text-[#004DAD] hover:underline">
            Certified Pre-owned
          </a>
          ,{" "}
          <a href="#" className="text-[#004DAD] hover:underline">
            New
          </a>
          , and{" "}
          <a href="#" className="text-[#004DAD] hover:underline">
            Used cars
          </a>{" "}
          on YallaMotor.
        </p>

        <div className="flex flex-col xl:flex-row gap-6">
          <div className="w-full xl:w-4/6">
            <CarListingsSection />
          </div>
          <div className="w-full xl:w-2/6">
            <CreateAlertSidebar />
          </div>
        </div>
      </section>
    </div>
  );
}
