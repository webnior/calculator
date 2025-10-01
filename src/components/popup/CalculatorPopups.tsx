"use client"

import React, { useEffect, useMemo, useState } from "react"
import { usePathname } from "next/navigation"

type PopupId = "mgmt" | "combo"

type LeadPayload = {
  name: string
  phone: string
  platform: string
  tag: string
}

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

type Copy = {
  title: string
  sub: string
  cta: string
  exit: string
  badge: string
  tag: string
}

function GlassCard({
  children,
  bgClass,
}: {
  children: React.ReactNode
  bgClass: string
}) {
  return (
    <div
      className={classNames(
        "relative w-full max-w-md mx-auto",
        "rounded-2xl shadow-2xl",
        "backdrop-blur-xl bg-white/70 dark:bg-slate-900/70",
        "border border-white/40 dark:border-slate-700/50"
      )}
    >
      <div
        className={classNames(
          "absolute inset-0 rounded-2xl bg-gradient-to-b",
          bgClass
        )}
      />
      <div className="relative p-6">{children}</div>
    </div>
  )
}

function ModalUI({
  open,
  onClose,
  copy,
  classes,
  name,
  phone,
  setName,
  setPhone,
  submitting,
  onSubmit,
  showSuccess,
  bgClass,
}: {
  open: boolean
  onClose: () => void
  copy: Copy
  classes: { primary: string; secondary: string; badge: string }
  name: string
  phone: string
  setName: (v: string) => void
  setPhone: (v: string) => void
  submitting: boolean
  onSubmit: () => void
  showSuccess: boolean
  bgClass: string
}) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 animate-fadeIn">
      <GlassCard bgClass={bgClass}>
        <div className="flex items-center justify-between">
          <span
            className={classNames(
              "text-xs font-semibold px-2 py-1 rounded-full",
              classes.badge
            )}
          >
            {copy.badge}
          </span>
          <button
            onClick={onClose}
            className="text-sm text-slate-500 hover:text-slate-700"
          >
            ✕
          </button>
        </div>
        <h3 className="mt-3 text-2xl font-extrabold leading-snug">
          {copy.title}
        </h3>
        <p className={classNames("mt-2 text-sm", classes.secondary)}>
          {copy.sub}
        </p>

        <form
          className="mt-5 grid gap-3"
          onSubmit={(e) => {
            e.preventDefault()
            onSubmit()
          }}
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Mobile Number"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            disabled={submitting}
            className={classNames(
              "mt-1 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-white font-semibold shadow-lg transition",
              classes.primary,
              "hover:brightness-110"
            )}
          >
            {submitting ? "Submitting…" : copy.cta}
          </button>
        </form>

        {showSuccess && (
          <div className="mt-4 rounded-lg bg-green-100 text-green-800 px-3 py-2 text-sm">
            Thank you! We will contact you shortly.
          </div>
        )}
      </GlassCard>
    </div>
  )
}

function ExitMessageUI({ message }: { message: string }) {
  if (!message) return null
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[70]">
      <div className="rounded-full px-4 py-2 shadow-lg bg-white/90 backdrop-blur border border-slate-200 text-sm">
        {message}
      </div>
    </div>
  )
}

const platformStyles: Record<
  string,
  {
    primary: string
    secondary: string
    bg: string
    badge: string
  }
> = {
  flipkart: {
    primary: "bg-blue-600",
    secondary: "text-yellow-400",
    bg: "from-blue-50 to-white",
    badge: "bg-yellow-400 text-black",
  },
  amazon: {
    primary: "bg-orange-500",
    secondary: "text-black",
    bg: "from-orange-50 to-white",
    badge: "bg-black text-white",
  },
  myntra: {
    primary: "bg-pink-600",
    secondary: "text-orange-400",
    bg: "from-pink-50 to-white",
    badge: "bg-gradient-to-r from-pink-500 to-orange-400 text-white",
  },
  ajio: {
    primary: "bg-indigo-700",
    secondary: "text-gray-600",
    bg: "from-indigo-50 to-white",
    badge: "bg-indigo-600 text-white",
  },
}

export default function CalculatorPopups() {
  const pathname = usePathname()
  const platform = useMemo(() => {
    if (!pathname) return "default"
    if (pathname.includes("/calculator/flipkart")) return "flipkart"
    if (pathname.includes("/calculator/amazon")) return "amazon"
    if (pathname.includes("/calculator/myntra")) return "myntra"
    if (pathname.includes("/calculator/ajio")) return "ajio"
    return "default"
  }, [pathname])

  const styles = platformStyles[platform] || {
    primary: "bg-blue-600",
    secondary: "text-indigo-600",
    bg: "from-gray-50 to-white",
    badge: "bg-indigo-600 text-white",
  }

  const [showMgmt, setShowMgmt] = useState(false)
  const [showCombo, setShowCombo] = useState(false)
  const [showExitMessage, setShowExitMessage] = useState<PopupId | null>(null)
  const [isSubmitting, setIsSubmitting] = useState<PopupId | null>(null)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [successPopup, setSuccessPopup] = useState<PopupId | null>(null)

  // timers: 5s and 35s
  useEffect(() => {
    const t1 = setTimeout(() => setShowMgmt(true), 5000)
    const t2 = setTimeout(() => setShowCombo(true), 35000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  // exit-intent
  useEffect(() => {
    function onLeave(e: MouseEvent) {
      if (e.clientY <= 0) {
        if (showMgmt && !successPopup) setShowExitMessage("mgmt")
        else if (showCombo && !successPopup) setShowExitMessage("combo")
      }
    }
    document.addEventListener("mouseout", onLeave)
    return () => document.removeEventListener("mouseout", onLeave)
  }, [showMgmt, showCombo, successPopup])

  function getCopy(popup: PopupId) {
    if (platform === "flipkart") {
      if (popup === "mgmt")
        return {
          title: "🛒 Get 1 Month of Flipkart Account Management FREE!",
          sub: "Boost rankings, grow faster, and win the Buy Box—don’t miss this golden chance to dominate Flipkart.",
          cta: "👉 Claim My Free Month Now",
          exit: "⚠️ Wait! Sellers who skip this free month miss out on more visibility & sales—are you sure?",
          badge: "FREE – Limited Time",
          tag: "Lead from Flipkart Calculator – Account Management Popup",
        }
      return {
        title: "🔥 Exclusive Combo: FREE Ajio + Myntra Seller Onboarding!",
        sub: "Expand beyond Flipkart. Double your reach with Ajio & Myntra—this FREE combo onboarding won’t last long!",
        cta: "✨ Unlock My Free Combo Offer",
        exit: "😮 Leaving now = losing your FREE Ajio + Myntra Combo. This chance won’t return!",
        badge: "FREE Combo – Limited Time",
        tag: "Lead from Flipkart Calculator – Ajio+Myntra Popup",
      }
    }
    if (platform === "amazon") {
      if (popup === "mgmt")
        return {
          title: "📦 Get 1 Month of Amazon Account Management Absolutely FREE!",
          sub: "Rank higher, increase visibility, and win the Buy Box—this FREE month could be your breakthrough on Amazon.",
          cta: "👉 Claim My Free Month Now",
          exit: "⚠️ Wait! Sellers who skip this free month lose their competitive edge—are you sure you want to miss out?",
          badge: "FREE – Limited Time",
          tag: "Lead from Amazon Calculator – Account Management",
        }
      return {
        title: "🔥 Free Ajio + Myntra Seller Onboarding Combo – Limited Time!",
        sub: "Don’t limit yourself to Amazon. Multiply your revenue with Ajio & Myntra—FREE onboarding combo for a short time only!",
        cta: "✨ Unlock My Free Combo Offer",
        exit: "😮 Closing this means losing your FREE Ajio + Myntra Combo. You may not see this again!",
        badge: "FREE Combo – Limited Time",
        tag: "Lead from Amazon Calculator – Ajio+Myntra Combo",
      }
    }
    if (platform === "myntra") {
      if (popup === "mgmt")
        return {
          title: "👗 Get 1 Month of Myntra Account Management FREE!",
          sub: "Boost your fashion sales, grow visibility, and make your brand shine on Myntra—grab this FREE month before it’s gone!",
          cta: "👉 Claim My Free Month Now",
          exit: "⚠️ Wait! Sellers skipping this free month lose their fashion edge on Myntra—are you sure you want to miss out?",
          badge: "FREE – Limited Time",
          tag: "Lead from Myntra Calculator – Account Management",
        }
      return {
        title:
          "🔥 All-in-One Combo: Ajio + Nykaa + Blinkit Onboarding at a Heavy Discount!",
        sub: "Expand to 3 power platforms with ONE deal. Fashion + Beauty + Quick Commerce = unstoppable growth. Grab this heavy discount combo before it’s gone!",
        cta: "✨ Unlock My All-in-One Combo",
        exit: "😮 Closing now means losing your discounted Ajio + Nykaa + Blinkit combo… This rare opportunity won’t come twice!",
        badge: "Heavy Discount – Limited Time",
        tag: "Lead from Myntra Calculator – All-in-One Combo",
      }
    }
    if (platform === "ajio") {
      if (popup === "mgmt")
        return {
          title: "🛍️ Get 1 Month of Ajio Account Management FREE!",
          sub: "Boost your fashion sales, improve visibility, and unlock faster growth on Ajio—this free month could be your turning point.",
          cta: "👉 Claim My Free Month Now",
          exit: "⚠️ Wait! Sellers skipping this free month lose visibility & growth on Ajio—are you sure you want to miss out?",
          badge: "FREE – Limited Time",
          tag: "Lead from Ajio Calculator – Account Management",
        }
      return {
        title:
          "🔥 Triple Power Combo: Free Myntra + Blinkit + Nykaa Onboarding!",
        sub: "Expand beyond Ajio. Fashion, beauty, and quick commerce—all covered in one FREE combo. Don’t miss this golden opportunity to sell across 3 platforms at once!",
        cta: "✨ Unlock My Free Triple Combo",
        exit: "😮 Closing this means losing your FREE Myntra + Blinkit + Nykaa combo. This chance doesn’t come often!",
        badge: "FREE Triple Combo – Limited Time",
        tag: "Lead from Ajio Calculator – Triple Combo",
      }
    }
    // default
    return {
      title: "Get Your Free Growth Offer!",
      sub: "Unlock expert help and accelerate your marketplace growth.",
      cta: "Get Started",
      exit: "Are you sure you want to miss this?",
      badge: "Limited Time",
      tag: "Lead from Calculator – Default",
    }
  }

  async function submitLead(popup: PopupId) {
    const copy = getCopy(popup)
    setIsSubmitting(popup)
    try {
      const payload: LeadPayload = {
        name,
        phone,
        platform,
        tag: copy.tag,
      }
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        setSuccessPopup(popup)
        setName("")
        setPhone("")
        // auto close after success
        setTimeout(() => {
          setSuccessPopup(null)
          if (popup === "mgmt") setShowMgmt(false)
          if (popup === "combo") setShowCombo(false)
        }, 2500)
      }
    } finally {
      setIsSubmitting(null)
    }
  }

  // remove local component definitions to prevent remounting on state updates

  return (
    <>
      <ModalUI
        open={showMgmt}
        onClose={() => setShowMgmt(false)}
        copy={getCopy("mgmt") as Copy}
        classes={{
          primary: styles.primary,
          secondary: styles.secondary,
          badge: styles.badge,
        }}
        name={name}
        phone={phone}
        setName={setName}
        setPhone={setPhone}
        submitting={isSubmitting === "mgmt"}
        onSubmit={() => submitLead("mgmt")}
        showSuccess={successPopup === "mgmt"}
        bgClass={styles.bg}
      />
      <ModalUI
        open={showCombo}
        onClose={() => setShowCombo(false)}
        copy={getCopy("combo") as Copy}
        classes={{
          primary: styles.primary,
          secondary: styles.secondary,
          badge: styles.badge,
        }}
        name={name}
        phone={phone}
        setName={setName}
        setPhone={setPhone}
        submitting={isSubmitting === "combo"}
        onSubmit={() => submitLead("combo")}
        showSuccess={successPopup === "combo"}
        bgClass={styles.bg}
      />
      {showExitMessage && (
        <ExitMessageUI message={getCopy(showExitMessage).exit} />
      )}
    </>
  )
}
