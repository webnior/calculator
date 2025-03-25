import { Separator } from "@/components/ui/separator"
import FAQ from "@/components/calculator/blogs/comp/FAQ"
import MyntraBlog from "@/components/calculator/blogs/myntra"
import { CalculatorForm } from "@/components/calculator/Form"
import AppBreadcrumb from "@/components/breadcrumb/AppBreadcrumb"
import CalculatorSelector from "@/components/calculator/CalculatorSelector"

export default function MyntraCalculator() {
  return (
    <main className="min-h-screen px-8 dark:bg-black dark:text-white">
      <AppBreadcrumb 
        items={[
          { label: 'Calculators', href: '/calculator' },
          { label: 'Myntra Calculator' }
        ]} 
      />
      <div className="mb-5">
        <CalculatorForm
          root={false}
          defaultValue={{
            plateform: "myntra",
          }}
        />
      </div>
      <CalculatorSelector />
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
