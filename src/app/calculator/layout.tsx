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
      name: "Mintra",
      link: "/calculator/mintra",
    },
    {
      name: "Shopsy",
      link: "/calculator/shopsy",
    },
    {
      name: "D-Mart",
      link: "/calculator/dmart",
    },
  ]
  return (
    <div className={`${inter.className} flex flex-row container px-0 h-screen`}>
      <div className="border-2 w-64 justify-start">
        <div className="text-center my-8 font-bold text-2xl text-yellow-900">
          <Link href={`/calculator/`}> Calculators</Link>
        </div>
        <nav className="w-full">
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
      <div className="flex-1">{children}</div>
      <div className="w-64 justify-end text-right border-2 border-spacing-1">
        right side bar
      </div>
    </div>
  )
}
