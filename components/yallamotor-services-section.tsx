import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function YallamotorServicesSection() {
  const services = [
    {
      id: 1,
      title: "VEHICLE REPORT",
      description: "Discover the best value for your current or future car.",
      image: "/images/service-report.png",
    },
    {
      id: 2,
      title: "CAR INSPECTION",
      description: "Get a car inspected by our team experts.",
      image: "/images/service-inspection.png",
    },
    {
      id: 3,
      title: "CAR EXPORT",
      description: "Bring your car of dreams home by YallaExport.",
      image: "/images/Export.png",
    },
    {
      id: 4,
      title: "CAR FINANCING",
      description: "Finance the car of your dreams with Finmart.",
      image: "/images/car_finance_desktop.png",
    },
  ];

  return (
    <section className="bg-[#676767] py-10 px-4 sm:px-6 lg:px-8 mb-12 rounded-lg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Yallamotor Services
          </h2>
          <p className="text-bse text-white max-w-3xl mx-auto">
            Everything you need to make your car buying journey hassle free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="rounded flex items-center justify-center">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={64}
                      height={48}
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-base font-bold text-[#222222] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#222] mb-2 text-sm">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-sm gap-2 text-[#124d99] hover:text-blue-700 font-bold"
                  >
                    Explore More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
