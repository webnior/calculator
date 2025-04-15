// src/app/blinkit-seller-calculator/client.tsx
"use client"

import BlikitCommissionCalculator from "@/components/BlikitCommissionCalculator"

export default function ClientBlinkit(): JSX.Element {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Blinkit Seller Commission Calculator
      </h1>

      <div className="mb-8">
        <p className="text-lg mb-4">
          Use our free Blinkit seller commission calculator to estimate your
          earnings and plan your quick commerce business. Understand commission
          structures, fees, and potential profits on India fastest-growing
          grocery delivery platform.
        </p>
      </div>

      <BlikitCommissionCalculator />

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">
              How does Blinkit calculate seller commissions?
            </h3>
            <p>
              Blinkit commissions are typically calculated as a percentage of
              the order value, varying by product category and seller tier.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">
              What factors affect my earnings as a Blinkit seller?
            </h3>
            <p>
              Your earnings depend on order volume, average order value, product
              categories, return rates, and your seller performance metrics.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">
              How often does Blinkit pay its sellers?
            </h3>
            <p>
              Blinkit typically processes seller payments on a weekly basis,
              with funds transferred directly to your registered bank account.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
