// import { type Plateforms } from "@/lib/types"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Plateforms } from "@/lib/types"
import { CalculatorForm } from "@/components/calculator/Form"

export default function Plateform({
  params: { plateform },
}: {
  params: { plateform: Plateforms }
}) {
  const availableRoute: Plateforms[] = [
    "flipkart",
    "amazon",
    "myntra",
    "shopsy",
    "ajio",
  ] as Plateforms[]
  if (!availableRoute.includes(plateform)) {
    notFound()
  }
  
  // Platform display names and icons
  const platformInfo = {
    flipkart: {
      name: "Flipkart",
      icon: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png",
      color: "bg-blue-500"
    },
    amazon: {
      name: "Amazon",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
      color: "bg-yellow-500"
    },
    myntra: {
      name: "Myntra",
      icon: "https://logos-download.com/wp-content/uploads/2016/10/Myntra_logo.png",
      color: "bg-pink-500"
    },
    ajio: {
      name: "AJIO",
      icon: "https://assets.ajio.com/static/img/Ajio-Logo.svg",
      color: "bg-indigo-500"
    },
    shopsy: {
      name: "Shopsy",
      icon: "/shopsy-logo.png",
      color: "bg-green-500"
    }
  }
  
  return (
    <div className="min-h-screen w-full dark:bg-black dark:text-white">
      <div className="mb-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">
            {platformInfo[plateform].name} Fee Calculator
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Calculate your selling fees and profit margins on {platformInfo[plateform].name}
          </p>
        </div>
        
        {/* Platform Selector */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-3 text-center">Switch Platform</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {availableRoute.map((p) => (
              <Link 
                key={p} 
                href={`/calculator/${p}`}
                className={`${p === plateform ? 'ring-2 ring-offset-2 ring-blue-500' : ''} flex items-center px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all ${p === plateform ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}`}
              >
                <span className="w-6 h-6 mr-2 relative">
                  <img 
                    src={platformInfo[p].icon} 
                    alt={platformInfo[p].name} 
                    className="object-contain w-full h-full"
                  />
                </span>
                <span className={p === plateform ? 'font-bold' : ''}>{platformInfo[p].name}</span>
              </Link>
            ))}
          </div>
        </div>

        <CalculatorForm
          root={false}
          defaultValue={{
            plateform: plateform,
          }}
        />
      </div>
      
     
    </div>
  )
}
