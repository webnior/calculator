"use client"

import { useState } from "react"
import { useTheme } from "next-themes"

import { Separator } from "@/components/ui/separator"
import { CalculatorForm } from "@/components/calculator/Form"
import WhatsAppWidget from "@/components/whatsappBottom/WhatsAppWidget"

type Theme = "light" | "dark"

export default function Home() {
  const [theme, setNewTheme] = useState<Theme>("light")
  const { setTheme } = useTheme()

  return (
    <main className="min-h-screen px-4 sm:px-6 md:px-8 dark:bg-black dark:text-white">
      <div className="max-w-6xl mx-auto py-6 md:py-10">
        <div className="mb-5">
          <CalculatorForm
            defaultValue={{
              plateform: "flipkart",
            }}
            root={true}
          />
        </div>
        <Separator className="my-4" />
        <Separator className="my-4" />
      </div>
      <WhatsAppWidget />
    </main>
  )
}
