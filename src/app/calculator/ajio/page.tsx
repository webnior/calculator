import { Separator } from "@/components/ui/separator"
import AjioBlog from "@/components/calculator/blogs/ajio"
import FAQ from "@/components/calculator/blogs/comp/FAQ"
import { CalculatorForm } from "@/components/calculator/Form"

export default function AjioCalculator() {
  return (
    <main className="min-h-screen px-8 dark:bg-black dark:text-white">
      <div className="mb-5">
        <CalculatorForm
          root={false}
          defaultValue={{
            plateform: "ajio",
          }}
        />
      </div>
      <Separator />
      <Separator />
      <div className="mb-5">
        <AjioBlog />
      </div>
      <Separator />
      <Separator />
      <div className="mb-5">
        <FAQ page="ajio" />
      </div>
    </main>
  )
}
