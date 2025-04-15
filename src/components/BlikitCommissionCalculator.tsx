// components/BlikitCommissionCalculator.tsx
import { ChangeEvent, useEffect, useState } from "react"

// Define types for the component
type Category =
  | "Apparel - Belts"
  | "Electronics"
  | "Home & Kitchen"
  | "Beauty & Personal Care"
  | "Grocery"
  | "Books"
  | "Toys & Games"
  | "other"

interface CommissionRates {
  [key: string]: number
}

interface StorageTier {
  unitRate: number
  volumeRate: number
  daysRange: [number, number]
}

export default function BlikitCommissionCalculator(): JSX.Element {
  // State for all inputs
  const [category, setCategory] = useState<Category>("Apparel - Belts")
  const [sellingPrice, setSellingPrice] = useState<number>(500)
  const [length, setLength] = useState<number>(1)
  const [breadth, setBreadth] = useState<number>(1)
  const [height, setHeight] = useState<number>(1)
  const [daysToSell, setDaysToSell] = useState<number>(30)
  const [quantity, setQuantity] = useState<number>(1)

  // State for calculated values
  const [volume, setVolume] = useState<number>(0)
  const [inwardingFee, setInwardingFee] = useState<number>(0)
  const [storageFee, setStorageFee] = useState<number>(0)
  const [fulfillmentFee, setFulfillmentFee] = useState<number>(0)
  const [categoryCommission, setCategoryCommission] = useState<number>(0)
  const [totalCommission, setTotalCommission] = useState<number>(0)
  const [gstAmount, setGstAmount] = useState<number>(0)
  const [totalWithGst, setTotalWithGst] = useState<number>(0)

  // Categories data
  const categories: Category[] = [
    "Apparel - Belts",
    "Electronics",
    "Home & Kitchen",
    "Beauty & Personal Care",
    "Grocery",
    "Books",
    "Toys & Games",
    "other",
  ]

  // Define commission rates
  const commissionRates: CommissionRates = {
    "0-500": 0.02, // 2%
    "501-700": 0.06, // 6%
    "701-900": 0.13, // 13%
    "901-1200": 0.16, // 16%
    "1201+": 0.18, // 18%
  }

  // Define storage fee tiers
  const storageTiers: StorageTier[] = [
    { unitRate: 1.0, volumeRate: 6.0, daysRange: [1, 30] },
    { unitRate: 1.25, volumeRate: 6.25, daysRange: [31, 60] },
    { unitRate: 1.5, volumeRate: 6.55, daysRange: [61, Infinity] },
  ]

  // Constants for fee calculations
  const INWARDING_FEE_PER_UNIT: number = 7.5
  const FULFILLMENT_FEE_PER_UNIT: number = 25
  const INVENTORY_RECALL_FEE: number = 5
  const CUSTOMER_RETURN_FEE: number = 50
  const GST_RATE: number = 0.18 // 18%
  const CUBIC_CM_TO_CUBIC_FT: number = 28316

  // Calculate volume in cubic feet
  useEffect(() => {
    const volumeInCubicFeet: number =
      (length * breadth * height) / CUBIC_CM_TO_CUBIC_FT
    setVolume(volumeInCubicFeet)
  }, [length, breadth, height])

  // Calculate all fees and commission
  useEffect(() => {
    // 1. Inwarding Fee
    const inwarding: number = INWARDING_FEE_PER_UNIT * quantity
    setInwardingFee(inwarding)

    // 2. Storage Fee`
    let storageRate: number = 0
    let volumeBasedRate: number = 0

    if (daysToSell <= 30) {
      storageRate = storageTiers[0].unitRate * quantity * daysToSell
      volumeBasedRate = storageTiers[0].volumeRate * volume * daysToSell
    } else if (daysToSell <= 60) {
      const firstThirtyDays: number = 30
      const remainingDays: number = daysToSell - 30

      storageRate =
        storageTiers[0].unitRate * quantity * firstThirtyDays +
        storageTiers[1].unitRate * quantity * remainingDays

      volumeBasedRate =
        storageTiers[0].volumeRate * volume * firstThirtyDays +
        storageTiers[1].volumeRate * volume * remainingDays
    } else {
      const firstThirtyDays: number = 30
      const nextThirtyDays: number = 30
      const remainingDays: number = daysToSell - 60

      storageRate =
        storageTiers[0].unitRate * quantity * firstThirtyDays +
        storageTiers[1].unitRate * quantity * nextThirtyDays +
        storageTiers[2].unitRate * quantity * remainingDays

      volumeBasedRate =
        storageTiers[0].volumeRate * volume * firstThirtyDays +
        storageTiers[1].volumeRate * volume * nextThirtyDays +
        storageTiers[2].volumeRate * volume * remainingDays
    }

    setStorageFee(Math.max(storageRate, volumeBasedRate))

    // 3. Category Commission
    let commissionRate: number = 0
    if (sellingPrice <= 500) {
      commissionRate = commissionRates["0-500"]
    } else if (sellingPrice <= 700) {
      commissionRate = commissionRates["501-700"]
    } else if (sellingPrice <= 900) {
      commissionRate = commissionRates["701-900"]
    } else if (sellingPrice <= 1200) {
      commissionRate = commissionRates["901-1200"]
    } else {
      commissionRate = commissionRates["1201+"]
    }

    const commission: number = sellingPrice * commissionRate
    setCategoryCommission(commission)

    // 4. Fulfillment Fee
    const fulfillment: number = FULFILLMENT_FEE_PER_UNIT * quantity
    setFulfillmentFee(fulfillment)

    // Total Commission (pre-GST)
    const total: number =
      inwarding +
      Math.max(storageRate, volumeBasedRate) +
      commission +
      fulfillment
    setTotalCommission(total)

    // GST (18%)
    const gst: number = total * GST_RATE
    setGstAmount(gst)

    // Total with GST
    setTotalWithGst(total + gst)
  }, [sellingPrice, length, breadth, height, daysToSell, quantity, volume])

  // Event handlers with type safety
  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setCategory(e.target.value as Category)
  }

  const handleNumberInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<number>>
  ): void => {
    setter(Number(e.target.value))
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Calculator Section */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Know How Much You Will Pay as Commissions to Blinkit
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section - Product Definition */}
          <div className="md:col-span-2 bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">
              Define your product
            </h2>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select business category <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={category}
                onChange={handleCategoryChange}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Selling price <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">₹</span>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={sellingPrice}
                  onChange={(e) => handleNumberInputChange(e, setSellingPrice)}
                  min="1"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product dimensions (with packaging){" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-xs text-gray-500">L (cm)</label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={length}
                    onChange={(e) => handleNumberInputChange(e, setLength)}
                    min="0.1"
                    step="0.1"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500">B (cm)</label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={breadth}
                    onChange={(e) => handleNumberInputChange(e, setBreadth)}
                    min="0.1"
                    step="0.1"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500">H (cm)</label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={height}
                    onChange={(e) => handleNumberInputChange(e, setHeight)}
                    min="0.1"
                    step="0.1"
                  />
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Volume: {volume.toFixed(4)} cubic ft
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantity <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={quantity}
                onChange={(e) => handleNumberInputChange(e, setQuantity)}
                min="1"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expected days to sell <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center">
                <input
                  type="range"
                  className="w-full mr-4"
                  min="1"
                  max="90"
                  value={daysToSell}
                  onChange={(e) => handleNumberInputChange(e, setDaysToSell)}
                />
                <div className="flex items-center">
                  <input
                    type="number"
                    className="w-16 p-2 border border-gray-300 rounded-md"
                    value={daysToSell}
                    onChange={(e) => handleNumberInputChange(e, setDaysToSell)}
                    min="1"
                    max="90"
                  />
                  <span className="ml-2 text-gray-600">days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Commission Summary */}
          <div className="bg-green-700 text-white p-4 md:p-6 rounded-lg shadow-sm">
            <div className="text-center mb-6">
              <h3 className="text-lg font-medium">Total commission</h3>
              <div className="text-4xl font-bold">
                ₹{totalCommission.toFixed(2)}
              </div>
            </div>

            <div className="border-t border-green-600 pt-4 mb-4">
              <h4 className="text-sm text-center text-green-200 mb-4">
                PRE SALE CHARGES
              </h4>

              <div className="flex justify-between mb-2">
                <div>
                  <span className="font-medium">Inwarding fee</span>
                  <span className="block text-xs text-green-200">
                    per quantity received
                  </span>
                </div>
                <span>₹{inwardingFee.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Storage fee</span>
                  <span className="block text-xs text-green-200">
                    <button className="underline">see details &gt;</button>
                  </span>
                </div>
                <span>₹{storageFee.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-green-600 pt-4 mb-4">
              <h4 className="text-sm text-center text-green-200 mb-4">
                POST SALE CHARGES
              </h4>

              <div className="flex justify-between mb-2">
                <div>
                  <span className="font-medium">Fulfillment fee</span>
                  <span className="block text-xs text-green-200">
                    per order
                  </span>
                </div>
                <span>₹{fulfillmentFee.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">Category commission</span>
                <span>₹{categoryCommission.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-green-600 pt-4 mb-4">
              <h4 className="text-sm text-center text-green-200 mb-4">
                COMMISSION SLABS
              </h4>

              <div
                className={`flex justify-between mb-1 ${sellingPrice <= 500 ? "font-bold" : ""}`}
              >
                <span>Upto ₹ 500</span>
                <span>2% of selling price</span>
              </div>
              <div
                className={`flex justify-between mb-1 ${sellingPrice > 500 && sellingPrice <= 700 ? "font-bold" : ""}`}
              >
                <span>₹ 500 - ₹ 700</span>
                <span>6% of selling price</span>
              </div>
              <div
                className={`flex justify-between mb-1 ${sellingPrice > 700 && sellingPrice <= 900 ? "font-bold" : ""}`}
              >
                <span>₹ 700 - ₹ 900</span>
                <span>13% of selling price</span>
              </div>
              <div
                className={`flex justify-between mb-1 ${sellingPrice > 900 && sellingPrice <= 1200 ? "font-bold" : ""}`}
              >
                <span>₹ 900 - ₹ 1200</span>
                <span>16% of selling price</span>
              </div>
              <div
                className={`flex justify-between ${sellingPrice > 1200 ? "font-bold" : ""}`}
              >
                <span>Above ₹ 1200</span>
                <span>18% of selling price</span>
              </div>
            </div>

            <div className="border-t border-green-600 pt-4">
              <h4 className="text-sm text-center text-green-200 mb-4">
                OTHER CHARGES
              </h4>

              <div className="flex justify-between mb-2">
                <span>Inventory Recall</span>
                <span>₹ {INVENTORY_RECALL_FEE} / qty</span>
              </div>

              <div className="flex justify-between">
                <span>Customer Return</span>
                <span>₹ {CUSTOMER_RETURN_FEE} / qty returned</span>
              </div>
            </div>
          </div>
        </div>

        {/* GST Notice */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 p-4 rounded-lg flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-500 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-gray-700">
            18% GST will be applicable on above charges (₹{gstAmount.toFixed(2)}
            ) - Total: ₹{totalWithGst.toFixed(2)}
          </span>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-md prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Understanding Blinkit Seller Fees and Commissions: A Complete Guide
        </h2>

        <p className="text-gray-700">
          Are you planning to sell products on Blinkit? Understanding the
          complete fee structure is essential for calculating your profitability
          and planning your pricing strategy effectively. Our interactive
          Blinkit Commission Calculator above helps you estimate your costs, but
          let dive deeper into what each fee means for your business.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
          Complete Breakdown of Blinkit Seller Fees in 2025
        </h3>

        <h4 className="text-lg font-medium text-gray-800 mt-6 mb-2">
          1. Inwarding Fee (₹7.50 per unit)
        </h4>
        <p className="text-gray-700">
          Every unit you send to Blinkit warehouse incurs an inwarding fee. This
          one-time fee is charged when your inventory is received and processed
          at their fulfillment center. For high-volume sellers, these costs can
          add up quickly, so consider bundling products when possible.
        </p>

        <h4 className="text-lg font-medium text-gray-800 mt-6 mb-2">
          2. Storage Fee (Tiered Pricing System)
        </h4>
        <p className="text-gray-700">
          Blinkit charges daily storage fees based on both the physical units
          and the cubic feet your products occupy. The longer your products
          remain unsold, the higher the storage rates become:
        </p>

        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li className="mb-1">
            <strong>First 30 days</strong>: ₹1/unit/day OR ₹6/cubic ft/day
            (whichever is higher)
          </li>
          <li className="mb-1">
            <strong>31-60 days</strong>: ₹1.25/unit/day OR ₹6.25/cubic ft/day
          </li>
          <li className="mb-1">
            <strong>Beyond 60 days</strong>: ₹1.5/unit/day OR ₹6.55/cubic ft/day
          </li>
        </ul>

        <p className="text-gray-700">
          To calculate volume in cubic feet, use the formula: Length × Width ×
          Height (in cm) ÷ 28,316
        </p>

        <p className="text-gray-700 font-medium italic">
          Pro tip: Optimize your inventory turnover to keep storage fees
          minimal. The Blinkit algorithm favors products with faster turnover
          rates.
        </p>

        <h4 className="text-lg font-medium text-gray-800 mt-6 mb-2">
          3. Platform Commission (Category-Based Percentage)
        </h4>
        <p className="text-gray-700">
          The commission structure on Blinkit is tiered according to your
          product selling price:
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border border-gray-300 rounded-md">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border-b">Selling Price Range</th>
                <th className="px-4 py-2 border-b">Commission Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">Up to ₹500</td>
                <td className="px-4 py-2 border-b">2%</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">₹500 – ₹700</td>
                <td className="px-4 py-2 border-b">6%</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">₹700 – ₹900</td>
                <td className="px-4 py-2 border-b">13%</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">₹900 – ₹1200</td>
                <td className="px-4 py-2 border-b">16%</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Above ₹1200</td>
                <td className="px-4 py-2">18%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700">
          This progressive structure means higher-priced items face steeper
          commission rates, which should be factored into your pricing strategy.
        </p>

        <h4 className="text-lg font-medium text-gray-800 mt-6 mb-2">
          4. Fulfillment Fee (₹25 per unit)
        </h4>
        <p className="text-gray-700">
          When a customer orders your product, Blinkit charges a fulfillment fee
          for picking, packing, and delivering each unit. This covers last-mile
          delivery and ensures your product reaches customers within Blinkit
          promised delivery time.
        </p>

        <h4 className="text-lg font-medium text-gray-800 mt-6 mb-2">
          5. Additional Fees to Consider
        </h4>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li className="mb-1">
            <strong>Inventory Removal Fee</strong>: ₹5 per unit when you recall
            inventory from Blinkit warehouse
          </li>
          <li className="mb-1">
            <strong>Customer Return Fee</strong>: ₹50 per unit for customer
            returns due to seller-attributed issues
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
          How to Maximize Profitability on Blinkit in 2025
        </h3>

        <ol className="list-decimal pl-6 mb-4 text-gray-700">
          <li className="mb-2">
            <strong>Optimize Product Dimensions</strong>: Smaller, lighter
            products incur lower storage fees. Consider redesigning packaging to
            minimize cubic feet.
          </li>
          <li className="mb-2">
            <strong>Price Strategically Around Commission Tiers</strong>:
            Sometimes adjusting your price slightly can put you in a lower
            commission bracket, potentially increasing your profit margin.
          </li>
          <li className="mb-2">
            <strong>Manage Inventory Efficiently</strong>: Monitor sell-through
            rates closely to avoid long-term storage fees. Consider promotional
            activities for slow-moving inventory.
          </li>
          <li className="mb-2">
            <strong>Quality Control</strong>: Minimize returns by ensuring
            product quality and accurate descriptions, as return fees can
            significantly impact profitability.
          </li>
          <li className="mb-2">
            <strong>Calculate All Costs Before Listing</strong>: Use our Blinkit
            commission calculator above to estimate your total costs and
            determine minimum profitable pricing.
          </li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
          Why Blinkit Quick Commerce Is Worth the Fees
        </h3>

        <p className="text-gray-700">
          Despite the various fees, Blinkit offers sellers unique advantages in
          the quick commerce space:
        </p>

        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li className="mb-1">
            <strong>10-minute delivery promise</strong> increases customer
            satisfaction and can drive higher sales volume
          </li>
          <li className="mb-1">
            <strong>Built-in customer base</strong> of urban shoppers who
            prioritize convenience
          </li>
          <li className="mb-1">
            <strong>Simplified logistics</strong> handling with Blinkit managing
            storage and delivery
          </li>
          <li className="mb-1">
            <strong>Exposure in the growing quick commerce market</strong>{" "}
            projected to reach $5.5 billion in India by 2025
          </li>
        </ul>

        <p className="text-gray-700">
          Our Blinkit Commission Calculator helps you make informed decisions by
          estimating all applicable fees before you list your products. Take
          control of your quick commerce business by understanding exactly how
          these fees impact your bottom line.
        </p>

        <p className="text-gray-700 italic mt-6">
          Remember: All fees are subject to 18% GST as per current regulations.
        </p>
      </div>
    </div>
  )
}
