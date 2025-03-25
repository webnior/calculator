import { Separator } from "@/components/ui/separator"
import AjioBlog from "@/components/calculator/blogs/ajio"
import FAQ from "@/components/calculator/blogs/comp/FAQ"
import { CalculatorForm } from "@/components/calculator/Form"
import AppBreadcrumb from "@/components/breadcrumb/AppBreadcrumb"
import CalculatorSelector from "@/components/calculator/CalculatorSelector"

export default function AjioCalculator() {
  return (
    <main className="min-h-screen px-8 dark:bg-black dark:text-white">
      <AppBreadcrumb 
        items={[
          { label: 'Calculators', href: '/calculator' },
          { label: 'Ajio Calculator' }
        ]} 
      />
      <div className="mb-5">
        <CalculatorForm
          root={false}
          defaultValue={{
            plateform: "ajio",
          }}
        />
      </div>
      <CalculatorSelector />
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
