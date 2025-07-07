
import { ArrowRight, FileText, Search, Plane, CreditCard } from "lucide-react"

export default function YallamotorServicesSection() {
  const services = [
    {
      id: 1,
      title: "Vehicle Report",
      description: "Get comprehensive vehicle history and valuation reports",
      image: "/images/service-report.png",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      features: ["Complete History", "Market Value", "Damage Report"],
    },
    {
      id: 2,
      title: "Car Inspection",
      description: "Professional 240-point inspection by certified experts",
      image: "/images/service-inspection.png",
      icon: Search,
      color: "from-green-500 to-green-600",
      features: ["240-Point Check", "Expert Review", "Detailed Report"],
    },
    {
      id: 3,
      title: "Car Export",
      description: "Ship your dream car worldwide with YallaExport",
      image: "/images/Export.png",
      icon: Plane,
      color: "from-purple-500 to-purple-600",
      features: ["Global Shipping", "Documentation", "Insurance"],
    },
    {
      id: 4,
      title: "Car Financing",
      description: "Get the best financing deals with competitive rates",
      image: "/images/car_finance_desktop.png",
      icon: CreditCard,
      color: "from-orange-500 to-orange-600",
      features: ["Low Rates", "Quick Approval", "Flexible Terms"],
    },
  ]

  return (
    <section className="bg-white rounded-3xl p-8 lg:p-12 mb-12 border border-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#3b3b3b] mb-4">YallaMotor Services</h2>
        <p className="text-base text-gray-600 max-w-3xl mx-auto">
          Complete automotive solutions to make your car journey seamless and worry-free
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200"
          >
            <div >
              {/* Icon Section */}
              <div
                className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content Section */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#3b3b3b] text-center mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="flex justify-center flex-wrap gap-2 mb-4">
                  {service.features.map((feature, index) => (
                    <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="flex mx-auto items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
