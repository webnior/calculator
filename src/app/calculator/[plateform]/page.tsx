// import { type Plateforms } from "@/lib/types"
import { notFound } from "next/navigation"

import { Plateforms } from "@/lib/types"
import { CalculatorForm } from "@/components/calculator/Form"

export default function Plateform({
  params: { plateform },
}: {
  params: { plateform: Plateforms }
}) {
  const availableRoute: Plateforms[] = [
    "flipkart",
    "amazon",
    "myntra",
    "shopsy",
    "ajio",
  ] as Plateforms[]
  if (!availableRoute.includes(plateform)) {
    notFound()
  }
  return (
    <main className="min-h-screen px-8 dark:bg-black dark:text-white">
      <CalculatorForm
        root={false}
        defaultValue={{
          plateform: plateform,
        }}
      />
    </main>
  )
}
