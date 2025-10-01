import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"

import CalculatorPopups from "@/components/popup/CalculatorPopups"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Marketplace Fee Calculators",
  description:
    "Calculate selling fees and profit margins for Flipkart, Amazon, Myntra, AJIO and more marketplaces",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${inter.className} w-full`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <CalculatorPopups />
        {children}
      </div>
    </div>
  )
}
