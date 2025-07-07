import Image from "next/image";
import { useState } from "react";

export default function PopularBrandsSection() {
  const allBrands = [
    { name: "Nissan", logo: "/images/brands/Nissan.png" },
    { name: "Toyota", logo: "/images/brands/toyota.png" },
    { name: "Mercedes-Benz", logo: "/images/brands/marcedes-benz.png" },
    { name: "Hyundai", logo: "/images/brands/hyundai.png" },
    { name: "Ford", logo: "/images/brands/ford.png" },
    { name: "Lexus", logo: "/images/brands/lexus.png" },
    { name: "Kia", logo: "/images/brands/kia.png" },
    { name: "Mitsubishi", logo: "/images/brands/mitsubishi.png" },
    { name: "Honda", logo: "/images/brands/honda.png" },
    { name: "BMW", logo: "/images/brands/bmw.png" },
  ];

  const [showAll, setShowAll] = useState(false);

  const brandsToShow = showAll ? allBrands : allBrands.slice(0, 8);

  return (
    <section className="pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#3b3b3b] mb-8 text-center sm:text-left">
          Popular brands in UAE - Prices, Specs & Features
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-8">
          {brandsToShow.map((brand, index) => (
            <a
              key={brand.name}
              href="#"
              className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 group"
              tabIndex={0}
              aria-label={`View details for ${brand.name}`}
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center overflow-hidden relative">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={96}
                  height={96}
                  className="object-contain"
                  priority={index < 4}
                  loading={index < 4 ? "eager" : "lazy"}
                />
              </div>
              <p className="text-base font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {brand.name}
              </p>
            </a>
          ))}
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
            className="inline-flex items-center border border-blue-600 text-blue-600 bg-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            {showAll
              ? "Show Less"
              : `Show More (${allBrands.length - brandsToShow.length})`}
          </button>
        </div>
      </div>
    </section>
  );
}
