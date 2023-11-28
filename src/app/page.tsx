"use client"

import { useState } from "react"
import { useTheme } from "next-themes"

import Callbutton from "@/components/callButton/Callbutton"
import Divider from "@/components/Divider"
import Hero from "@/components/heroSection/Hero"
import Services from "@/components/servicesSection/Services"
import WhatsAppWidget from "@/components/whatsappBottom/WhatsAppWidget"

type Theme = "light" | "dark"

export default function Home() {
  const [theme, setNewTheme] = useState<Theme>("light")
  const { setTheme } = useTheme()

  return (
    <main className="">
      <Hero />
      <Services />
      <Divider />
      <Callbutton />
      <WhatsAppWidget />
    </main>
  )
}
