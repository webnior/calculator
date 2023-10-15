"use client"

import { useState } from "react"
import { useTheme } from "next-themes"

type Theme = "light" | "dark"

export default function Home() {
  const [theme, setNewTheme] = useState<Theme>("light")
  const { setTheme } = useTheme()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-black dark:text-white">
      <button>Calculator page/ Shopsy</button>
    </main>
  )
}
