import Link from "next/link"
import {
  ArrowRightIcon,
  ArrowUpTrayIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  MegaphoneIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline"

const services = [
  {
    title: "Account Management",
    description: "Comprehensive management of your e-commerce accounts",
    icon: Cog6ToothIcon,
    link: "https://technovitasolution.in/services/",
  },
  {
    title: "Platform Onboarding",
    description: "Streamlined onboarding process for e-commerce platforms",
    icon: ArrowUpTrayIcon,
    link: "https://technovitasolution.in/services/",
  },
  {
    title: "Store Setup & Branding",
    description: "Professional store design and branding services",
    icon: ShoppingBagIcon,
    link: "https://technovitasolution.in/services/",
  },
  {
    title: "Payment Reconciliation",
    description: "Accurate tracking and reconciliation of payments",
    icon: CreditCardIcon,
    link: "https://technovitasolution.in/services/",
  },
  {
    title: "Catalog Management",
    description: "Efficient management of your product catalog",
    icon: ClipboardDocumentListIcon,
    link: "https://technovitasolution.in/services/",
  },
  {
    title: "Order Processing",
    description: "Streamlined order processing and fulfillment service",
    icon: ShoppingCartIcon,
    link: "https://technovitasolution.in/services/",
  },
  {
    title: "Advertising & Promotion",
    description: "Strategic advertising and promotional campaigns",
    icon: MegaphoneIcon,
    link: "https://technovitasolution.in/services/",
  },
  {
    title: "Performance Analytics",
    description: "Detailed analytics and performance reporting",
    icon: ChartBarIcon,
    link: "https://technovitasolution.in/services/",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our E-commerce Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to help your business thrive in the digital
            marketplace
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              href={service.link}
              key={index}
              className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full border border-amber-100"
            >
              <div className="mb-4 bg-amber-50 w-16 h-16 rounded-lg flex items-center justify-center">
                <service.icon className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              <div className="mt-4 flex items-center text-amber-600 font-medium group-hover:text-amber-700">
                Learn more
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="https://technovitasolution.in/services/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
