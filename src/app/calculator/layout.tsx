import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Calculators",
  description: "Calculators for Flipkart, Amazon, Shopsy, Ebay, etc.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const calculators = [
    {
      name: "Flipkart",
      link: "/calculator/flipkart",
    },
    {
      name: "Amazon",
      link: "/calculator/amazon",
    },
    {
      name: "Myntra",
      link: "/calculator/myntra",
    },
    {
      name: "AJIO",
      link: "/calculator/ajio",
    },
    {
      name: "Shopsy",
      link: "/calculator/shopsy",
    },
  ]
  return (
    <div className={`${inter.className} flex flex-row container px-0 `}>
      <div className="border-2 w-64 justify-start hidden md:block h-screen sticky top-0">
        <div className="text-center my-8 font-bold text-2xl text-yellow-900 ">
          <Link href={`/calculator/`}> Calculators</Link>
        </div>
        <nav className="w-full ">
          <div className=" text-left ml-8 mr-8">
            {calculators.map((calculator, i) => (
              <div
                key={i}
                className="px-2 py-3 text-lg hover:cursor-pointer bg-slate-400 m-3 rounded-md text-center text-white "
              >
                <Link href={calculator.link} className="">
                  {calculator.name}
                </Link>
              </div>
            ))}
          </div>
        </nav>
      </div>
      <div className="flex-1 min-h-screen">{children}</div>
      <div className="w-64 justify-end text-left p-3 underline hover:text-blue-600 border-2 border-spacing-1 hidden lg:block h-screen sticky top-0">
        <ul>
          <li>
            <Link
              href={`/seller-services/amazon-seller-guide/how-to-create-seller-account-on-amazon`}
            >
              Amazon Onboarding
            </Link>
          </li>
          <li>
            <Link
              href={`/seller-services/flipkart-seller-guide/how-to-create-seller-account-on-flipkart`}
            >
              Flipkart Onboarding
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
