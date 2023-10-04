"use client"

import { useState } from "react"
import { useTheme } from "next-themes"

import ExperienceSection from "@/components/Experience/ExperienceSection"
import Services from "@/components/servicesSection/Services"

import Hero from "../components/heroSection/Hero"

type Theme = "light" | "dark"

export default function Home() {
  const [theme, setNewTheme] = useState<Theme>("light")
  const { setTheme } = useTheme()

  return (
    <main className="">
      <Hero />
      <Services />
      <ExperienceSection />
    </main>
  )
}
