import { useState } from "react";

export default function SearchSections() {
  const searchCategories = [
    {
      title: "Popular Searches",
      items: [
        { name: "Used cars in Dubai", count: 17730 },
        { name: "Used cars in Abu Dhabi", count: 4954 },
        { name: "Used cars in Sharjah", count: 5989 },
        { name: "Used cars in Ajman", count: 3124 },
        { name: "Used cars under 50000 AED", count: 20816 },
        { name: "Used cars under 100000 AED", count: 28429 },
        { name: "Used cars under 30000 AED", count: 13968 },
        { name: "Used cars under 70000 AED", count: 24877 },
        { name: "Used cars under 120000 AED", count: 29660 },
        { name: "Used cars under 150000 AED", count: 30919 },
        { name: "Used cars under 250000 AED", count: 32782 },
      ],
    },
    {
      title: "By Body Type",
      items: [
        { name: "Used SUV cars", count: 13684 },
        { name: "Used Sedan cars", count: 13831 },
        { name: "Used Coupe cars", count: 1669 },
        { name: "Used Hatchback cars", count: 2368 },
        { name: "Used Convertible cars", count: 347 },
        { name: "Used Pickup Truck cars", count: 460 },
        { name: "Used Wagon cars", count: 163 },
        { name: "Used Minivan cars", count: 2 },
      ],
    },
    {
      title: "By Year",
      items: [
        { name: "2023 used cars in UAE", count: 1973 },
        { name: "2022 used cars in UAE", count: 1761 },
        { name: "2021 used cars in UAE", count: 1835 },
        { name: "2020 used cars in UAE", count: 2195 },
        { name: "2019 used cars in UAE", count: 2237 },
        { name: "2018 used cars in UAE", count: 2095 },
        { name: "2017 used cars in UAE", count: 2269 },
      ],
    },
    {
      title: "Mileage Range",
      items: [
        { name: "Used car under 5000 KM", count: 1649 },
        { name: "Used car under 10000 KM", count: 2051 },
        { name: "Used car under 15000 KM", count: 2530 },
        { name: "Used car under 20000 KM", count: 3041 },
        { name: "Used car under 30000 KM", count: 4018 },
        { name: "Used car under 40000 KM", count: 5050 },
        { name: "Used car under 50000 KM", count: 6136 },
        { name: "Used car under 60000 KM", count: 7336 },
        { name: "Used car under 70000 KM", count: 8553 },
        { name: "Used car under 80000 KM", count: 9854 },
        { name: "Used car under 90000 KM", count: 11138 },
        { name: "Used car under 100000 KM", count: 12603 },
      ],
    },
    {
      title: "Used Chinese Cars",
      items: [
        { name: "Used Chinese cars in UAE", count: 830 },
        { name: "Used Chinese cars in Dubai", count: 578 },
        { name: "Used Chinese cars in Ajman", count: 49 },
        { name: "Used Chinese cars in Fujairah", count: 8 },
        { name: "Used Chinese cars in Sharjah", count: 71 },
        { name: "Used Chinese cars in Ras Al Khaimah", count: 12 },
        { name: "Used Chinese cars in Abu Dhabi", count: 102 },
        { name: "Used Chinese cars in Al Ain", count: 8 },
        { name: "Used Chinese cars in Umm al Quwain", count: 2 },
      ],
    },
    {
      title: "Popular Brands",
      items: [
        { name: "Toyota", count: 4438 },
        { name: "Mercedes-Benz", count: 2406 },
        { name: "Nissan", count: 5444 },
        { name: "Lexus", count: 1778 },
        { name: "BMW", count: 1326 },
        { name: "Ford", count: 1834 },
        { name: "Land Rover", count: 862 },
        { name: "Hyundai", count: 1997 },
        { name: "Chevrolet", count: 1138 },
        { name: "Mitsubishi", count: 1470 },
        { name: "Honda", count: 1426 },
        { name: "Porsche", count: 344 },
        { name: "Kia", count: 1570 },
        { name: "MG", count: 259 },
        { name: "Jetour", count: 98 },
        { name: "Geely", count: 59 },
        { name: "JAC", count: 60 },
        { name: "BYD", count: 34 },
        { name: "Haval", count: 24 },
        { name: "Changan", count: 74 },
      ],
    },
  ];

  const [expandedSections, setExpandedSections] = useState<{
    [key: number]: boolean;
  }>({});

  function toggleExpand(idx: number) {
    setExpandedSections((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  }

  const initialVisibleCount = 5;

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore More Options
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find exactly what you're looking for with our popular search
            categories
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {searchCategories.map((category, idx) => {
            const isExpanded = expandedSections[idx];
            const itemsToShow = isExpanded
              ? category.items
              : category.items.slice(0, initialVisibleCount);
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {itemsToShow.map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex items-center justify-between p-4 bg-white rounded-xl hover:bg-blue-50 hover:border-blue-200 border border-gray-100 transition-all duration-200 group"
                    >
                      <span className="font-medium text-gray-900 group-hover:text-blue-600">
                        {item.name}
                      </span>
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold group-hover:bg-blue-100 group-hover:text-blue-700">
                        {item.count.toLocaleString()}
                      </span>
                    </a>
                  ))}
                </div>
                {category.items.length > initialVisibleCount && (
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="mt-3 text-sm text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    {isExpanded
                      ? "Show Less"
                      : `Show More(${
                          category.items.length - initialVisibleCount
                        })`}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
