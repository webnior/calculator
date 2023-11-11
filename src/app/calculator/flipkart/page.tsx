import { Separator } from "@/components/ui/separator"
import FAQ from "@/components/calculator/blogs/comp/FAQ"
import FlipkartBlog from "@/components/calculator/blogs/flipkart"
import { CalculatorForm } from "@/components/calculator/Form"

export default function FlipkartCalculator() {
  return (
    <main className="min-h-screen px-8 dark:bg-black dark:text-white">
      <div className="mb-5">
        <CalculatorForm
          root={false}
          defaultValue={{
            plateform: "flipkart",
          }}
        />
      </div>
      <Separator />
      <Separator />
      <div className="mb-5">
        <FlipkartBlog />
      </div>
      <Separator />
      <Separator />
      <div className="mb-5">
        <FAQ page="flipkart" />
      </div>
    </main>
  )
}
