export default function SearchSections() {
  const usedCarsCities = [
    { name: "Used cars in Dubai", count: 17730 },
    { name: "Used cars in Ajman", count: 3124 },
    { name: "Used cars in Fujairah", count: 336 },
    { name: "Used cars in Sharjah", count: 5989 },
    { name: "Used cars in Ras Al Khaimah", count: 613 },
    { name: "Used cars in Abu Dhabi", count: 4954 },
    { name: "Used cars in Al Ain", count: 979 },
    { name: "Used cars in Umm al Quwain", count: 214 },
  ];

  const budgetRanges = [
    { name: "Used cars under 30000 AED", count: 13968 },
    { name: "Used cars under 50000 AED", count: 20816 },
    { name: "Used cars under 70000 AED", count: 24877 },
    { name: "Used cars under 100000 AED", count: 28429 },
    { name: "Used cars under 120000 AED", count: 29660 },
    { name: "Used cars under 150000 AED", count: 30919 },
    { name: "Used cars under 250000 AED", count: 32782 },
  ];

  const bodyShapes = [
    { name: "Used SUV cars", count: 13684 },
    { name: "Used Sedan cars", count: 13831 },
    { name: "Used Coupe cars", count: 1669 },
    { name: "Used Hatchback cars", count: 2368 },
    { name: "Used Convertible cars", count: 347 },
    { name: "Used Pickup Truck cars", count: 460 },
    { name: "Used Wagon cars", count: 163 },
    { name: "Used Minivan cars", count: 2 },
  ];

  const mileageRanges = [
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
  ];

  const yearRanges = [
    { name: "2023 used cars in UAE", count: 1973 },
    { name: "2022 used cars in UAE", count: 1761 },
    { name: "2021 used cars in UAE", count: 1835 },
    { name: "2020 used cars in UAE", count: 2195 },
    { name: "2019 used cars in UAE", count: 2237 },
    { name: "2018 used cars in UAE", count: 2095 },
    { name: "2017 used cars in UAE", count: 2269 },
  ];

  const chineseCars = [
    { name: "Used Chinese cars in UAE", count: 830 },
    { name: "Used Chinese cars in Dubai", count: 578 },
    { name: "Used Chinese cars in Ajman", count: 49 },
    { name: "Used Chinese cars in Fujairah", count: 8 },
    { name: "Used Chinese cars in Sharjah", count: 71 },
    { name: "Used Chinese cars in Ras Al Khaimah", count: 12 },
    { name: "Used Chinese cars in Abu Dhabi", count: 102 },
    { name: "Used Chinese cars in Al Ain", count: 8 },
    { name: "Used Chinese cars in Umm al Quwain", count: 2 },
  ];

  const popularBrands = [
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
  ];

  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[28px] mb-3">
            People also search for
          </h2>
          <div className="bg-white p-4 rounded-sm">
            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#3b3b3b] mb-4">
                Used Cars
              </h3>
              <div className="flex flex-wrap gap-3">
                {usedCarsCities.map((city, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-[#f2f2f2] hover:bg-[#e0e0e0] rounded-lg px-4 py-2 text-sm text-[#3b3b3b] hover:text-[#124d99] transition-colors"
                  >
                    {city.name} ({city.count.toLocaleString()})
                  </a>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#3b3b3b] mb-4">
                Used cars by budget
              </h3>
              <div className="flex flex-wrap gap-3">
                {budgetRanges.map((budget, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-[#f2f2f2] hover:bg-[#e0e0e0] rounded-lg px-4 py-2 text-sm text-[#3b3b3b] hover:text-[#124d99] transition-colors"
                  >
                    {budget.name} ({budget.count.toLocaleString()})
                  </a>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#3b3b3b] mb-4">
                Used cars Body Shape
              </h3>
              <div className="flex flex-wrap gap-3">
                {bodyShapes.map((shape, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-[#f2f2f2] hover:bg-[#e0e0e0] rounded-lg px-4 py-2 text-sm text-[#3b3b3b] hover:text-[#124d99] transition-colors"
                  >
                    {shape.name} ({shape.count.toLocaleString()})
                  </a>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#3b3b3b] mb-4">
                Mileage range
              </h3>
              <div className="flex flex-wrap gap-3">
                {mileageRanges.map((mileage, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-[#f2f2f2] hover:bg-[#e0e0e0] rounded-lg px-4 py-2 text-sm text-[#3b3b3b] hover:text-[#124d99] transition-colors"
                  >
                    {mileage.name} ({mileage.count.toLocaleString()})
                  </a>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#3b3b3b] mb-4">
                By year
              </h3>
              <div className="flex flex-wrap gap-3">
                {yearRanges.map((year, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-[#f2f2f2] hover:bg-[#e0e0e0] rounded-lg px-4 py-2 text-sm text-[#3b3b3b] hover:text-[#124d99] transition-colors"
                  >
                    {year.name} ({year.count.toLocaleString()})
                  </a>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#3b3b3b] mb-4">
                Used chinese cars
              </h3>
              <div className="flex flex-wrap gap-3">
                {chineseCars.map((chinese, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-[#f2f2f2] hover:bg-[#e0e0e0] rounded-lg px-4 py-2 text-sm text-[#3b3b3b] hover:text-[#124d99] transition-colors"
                  >
                    {chinese.name} ({chinese.count.toLocaleString()})
                  </a>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#3b3b3b] mb-4">
                Popular used cars brands
              </h3>
              <div className="flex flex-wrap gap-3">
                {popularBrands.map((brand, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-[#f2f2f2] hover:bg-[#e0e0e0] rounded-lg px-4 py-2 text-sm text-[#3b3b3b] hover:text-[#124d99] transition-colors"
                  >
                    {brand.name} ({brand.count.toLocaleString()})
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
