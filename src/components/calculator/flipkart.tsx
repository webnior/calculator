import React, { useEffect, useState } from "react"
import { flipkartCalculator } from "@/lib"

export default function FlipkartCalculator() {
  const [totalFeesAndGST, setTotalFeesAndGST] = useState<{
    totalFees: number
    gst: number
  } | null>(null)

  useEffect(() => {
    // Replace these values with your actual data
    const sellingPrice: number = 2000
    const productWeight: number = 3
    const isFBF: boolean = true
    const productCategory: string = "juicerMixerGrinder"
    const shippingZones: string = "Interzone"

    const result = flipkartCalculator({
      sellingPrice,
      productWeight,
      isFBF,
      productCategory,
      shippingZones,
    })

    setTotalFeesAndGST(result)
  }, [])

  return (
    <div className="bg-gray-100">
      <h1>Flipkart Calculator</h1>
      {totalFeesAndGST !== null ? (
        <div>
          <h3>{`Total Flipkart Fees: ${totalFeesAndGST.totalFees}`}</h3>
          <h3>{`GST on Total Flipkart Fees: ${totalFeesAndGST.gst}`}</h3>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
