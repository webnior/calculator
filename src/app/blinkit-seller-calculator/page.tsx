// src/app/blinkit-seller-calculator/page.tsx
import type { Metadata } from "next"

import ClientBlinkit from "./client"

// This is a server component where we can define metadata
export const metadata: Metadata = {
  title: "Blinkit Seller Commission Calculator | Calculate Your Earnings",
  description:
    "Calculate your potential earnings and commissions as a Blinkit seller with our free calculator tool. Plan your business and maximize profits.",
  keywords:
    "blinkit commission calculator, blinkit seller earnings, quick commerce commission, blinkit seller calculator, grocery delivery earnings",
  openGraph: {
    title: "Blinkit Seller Commission Calculator | Calculate Your Earnings",
    description:
      "Calculate your potential earnings and commissions as a Blinkit seller with our free calculator tool.",
    url: "https://sellerguide.technovitasolution.in/blinkit-seller-calculator",
    siteName: "Technovita Solution",
    images: [
      {
        url: "/public/blinkit-seller-calculator.webp",
        width: 1200,
        height: 630,
        alt: "Blinkit Seller Commission Calculator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blinkit Seller Commission Calculator",
    description: "Calculate your potential earnings as a Blinkit seller",
    images: ["/public/blinkit-seller-calculator.webp"],
  },
}

// Server component that renders the client component
export default function BlinKitCommissionPage() {
  return <ClientBlinkit />
}
