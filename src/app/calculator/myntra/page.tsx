import { Separator } from "@/components/ui/separator"
import FAQ from "@/components/calculator/blogs/comp/FAQ"
import MyntraBlog from "@/components/calculator/blogs/myntra"
import { CalculatorForm } from "@/components/calculator/Form"

export default function MyntraCalculator() {
  return (
    <main className="min-h-screen px-8 dark:bg-black dark:text-white">
      <div className="mb-5">
        <CalculatorForm
          root={false}
          defaultValue={{
            plateform: "myntra",
          }}
        />
      </div>
      <Separator />
      <Separator />
      <div className="mb-5">
        <MyntraBlog />
      </div>
      <Separator />
      <Separator />
      <div className="mb-5">
        <FAQ page="myntra" />
      </div>
    </main>
  )
}
