"use client"

import { useState } from "react"
import { useTheme } from "next-themes"

import { CalculatorForm } from "@/components/calculator/Form"

type Theme = "light" | "dark"

export default function Home() {
  const [theme, setNewTheme] = useState<Theme>("light")
  const { setTheme } = useTheme()

  return (
    <main className="min-h-screen px-8 dark:bg-black dark:text-white">
      <CalculatorForm
        defaultValue={{
          plateform: "flipkart",
        }}
        root={true}
      />
    </main>
  )
}
