import { Separator } from "@/components/ui/separator"
import AmazonBlog from "@/components/calculator/blogs/amazon"
import { CalculatorForm } from "@/components/calculator/Form"

export default function AmazonCalculator() {
  return (
    <main className="min-h-screen px-8 dark:bg-black dark:text-white">
      <div className="mb-5">
        <CalculatorForm
          root={false}
          defaultValue={{
            plateform: "amazon",
          }}
        />
      </div>
      <Separator />
      <Separator />
      <AmazonBlog />
    </main>
  )
}
