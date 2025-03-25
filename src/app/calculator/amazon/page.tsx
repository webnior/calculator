import { Separator } from "@/components/ui/separator"
import AmazonBlog from "@/components/calculator/blogs/amazon"
import FAQ from "@/components/calculator/blogs/comp/FAQ"
import { CalculatorForm } from "@/components/calculator/Form"
import AppBreadcrumb from "@/components/breadcrumb/AppBreadcrumb"
import CalculatorSelector from "@/components/calculator/CalculatorSelector"

export default function AmazonCalculator() {
  return (
    <main className="min-h-screen px-8 dark:bg-black dark:text-white">
      <AppBreadcrumb 
        items={[
          { label: 'Calculators', href: '/calculator' },
          { label: 'Amazon Calculator' }
        ]} 
      />
      <div className="mb-5">
        <CalculatorForm
          root={false}
          defaultValue={{
            plateform: "amazon",
          }}
        />
      </div>
      <CalculatorSelector />
      <Separator />
      <Separator />
      <div className="mb-5">
        <AmazonBlog />
      </div>
      <Separator />
      <Separator />
      <div className="mb-5">
        <FAQ page="amazon" />
      </div>
    </main>
  )
}
