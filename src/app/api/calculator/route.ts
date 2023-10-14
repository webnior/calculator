import { flipkartCalculator } from "@/lib"

import { mapProductCategory } from "@/lib/calculator/flipkart"

export async function POST(request: Request) {
  const { plateform, sellPrice, fbf, szone, pcat, weight } =
    await request.json()
  switch (plateform) {
    case "flipkart": {
      const { totalFees, gst } = flipkartCalculator({
        sellingPrice: parseInt(sellPrice),
        productWeight: parseInt(weight),
        isFBF: fbf === "fbf",
        productCategory: mapProductCategory(pcat),
        shippingZones: szone,
      })
      console.log({ totalFees, gst })
      return Response.json({ totalFees, gst })
    }
    default: {
      return Response.json({ error: "Plateform Type not supported" })
    }
  }
}
