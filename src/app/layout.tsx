import CNavbar from "@/components/navbar/CNavbar"
import { Providers } from "@/components/providers"

import "@/styles/globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Technovita Solutions",
  description: "Technovita Website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <CNavbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
