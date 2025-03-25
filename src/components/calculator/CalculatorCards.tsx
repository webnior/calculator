import Link from "next/link";
import { 
  ShoppingBagIcon,
  ArrowRightIcon 
} from "@heroicons/react/24/outline";
import { GrAmazon } from "react-icons/gr";
import { SiFlipkart, SiCoinmarketcap } from "react-icons/si";
import { LiaArtstation } from "react-icons/lia";
import { TbBrandShopee } from "react-icons/tb";

const calculators = [
  {
    title: "Amazon Calculator",
    description: "Calculate Amazon seller fees, profits, and ROI for your products",
    icon: GrAmazon,
    link: "/calculator/amazon",
    color: "bg-yellow-50",
    iconColor: "text-yellow-600",
    hoverColor: "group-hover:text-yellow-700"
  },
  {
    title: "Flipkart Calculator",
    description: "Estimate Flipkart seller fees and potential profits",
    icon: SiFlipkart,
    link: "/calculator/flipkart",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    hoverColor: "group-hover:text-blue-700"
  },
  {
    title: "Myntra Calculator",
    description: "Calculate Myntra seller fees and profit margins",
    icon: SiCoinmarketcap,
    link: "/calculator/myntra",
    color: "bg-pink-50",
    iconColor: "text-pink-600",
    hoverColor: "group-hover:text-pink-700"
  },
  {
    title: "AJIO Calculator",
    description: "Estimate AJIO seller fees and potential earnings",
    icon: LiaArtstation,
    link: "/calculator/ajio",
    color: "bg-indigo-50",
    iconColor: "text-indigo-600",
    hoverColor: "group-hover:text-indigo-700"
  }
];

export default function CalculatorCards() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            E-commerce Seller Calculators
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Maximize your profits with our specialized calculators for different e-commerce platforms
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {calculators.map((calculator, index) => (
            <Link 
              href={calculator.link} 
              key={index}
              className={`group relative ${calculator.color} rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full border border-gray-100`}
            >
              <div className="mb-4 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm">
                <calculator.icon className={`h-7 w-7 ${calculator.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {calculator.title}
              </h3>
              <p className="text-gray-600 flex-grow text-sm">
                {calculator.description}
              </p>
              <div className={`mt-4 flex items-center ${calculator.iconColor} font-medium ${calculator.hoverColor}`}>
                Try Calculator
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
