import { amazonCalculator, flipkartCalculator } from "@/lib"

import { mapProductCategory } from "@/lib/calculator/flipkart"

export async function POST(request: Request) {
  const { plateform, sellPrice, fbf, szone, pcat, weight } =
    await request.json()

  const input = {
    sellingPrice: parseInt(sellPrice),
    productWeight: parseInt(weight),
    isFBF: fbf === "fbf",
    productCategory: mapProductCategory(pcat),
    shippingZones: szone,
  }
  switch (plateform) {
    case "flipkart": {
      const output = flipkartCalculator(input)
      console.log({ flipkart: output })
      return Response.json({ ...output })
    }
    case "amazon": {
      const output = amazonCalculator(input)
      console.log({ amazon: output })
      return Response.json({ ...output })
    }
    default: {
      return Response.json({
        error: "Plateform Type not supported. we are still working on it.",
      })
    }
  }
}
