import Footer from "@/components/footer/footer"
import CustomNavBar from "@/components/navbar/CustomNavBar"
import { Providers } from "@/components/providers"
import FloatingButtons from "@/components/floatingButtons/FloatingButtons"

import "@/styles/globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Technovita Solution",
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
          <CustomNavBar />
          {children}
          <FloatingButtons />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
