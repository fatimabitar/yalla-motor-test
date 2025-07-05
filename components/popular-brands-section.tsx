import Image from "next/image";

export default function PopularBrandsSection() {
  const brands = [
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

  return (
    <div className="pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[28px] font-bold text-black mb-8">
          Popular brands in UAE - Prices, Specs & Features
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {brands.map((brand, index) => (
            <a
              key={brand.name} 
              href="#"
              className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow group"
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
              <p className="text-sm font-medium text-[#3b3b3b] group-hover:text-blue-600 transition-colors">
                {brand.name}
              </p>
            </a>
          ))}
        </div>

        <div>
          <button
            className="border border-[#124d99] text-[#124d99] bg-white font-bold px-3 py-1 rounded-lg hover:bg-gray-50 transition-colors"
            aria-label="Show more popular brands"
            type="button"
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}
