import {
  ajioCalculator,
  amazonCalculator,
  flipkartCalculator,
  myntraCalculator,
} from "@/lib"

import { ajioProductCategory } from "@/lib/calculator/ajio"
import { amazonProductCategory } from "@/lib/calculator/amazon"
import { flipkartProductCategory } from "@/lib/calculator/flipkart"
import { myntraProductCategory } from "@/lib/calculator/myntra"

export async function POST(request: Request) {
  const { plateform, sellPrice, fbf, szone, pcat, weight } =
    await request.json()

  switch (plateform) {
    case "flipkart": {
      const input = {
        sellingPrice: parseInt(sellPrice),
        productWeight: parseInt(weight),
        isFBF: fbf === "fbf",
        productCategory: flipkartProductCategory(pcat),
        shippingZones: szone,
      }
      const output = flipkartCalculator(input)
      console.log({ flipkart: output })
      return Response.json({ ...output })
    }
    case "amazon": {
      const input = {
        sellingPrice: parseInt(sellPrice),
        productWeight: parseInt(weight),
        isFBF: fbf === "fbf",
        productCategory: amazonProductCategory(pcat),
        shippingZones: szone,
      }
      const output = amazonCalculator(input)
      console.log({ amazon: output })
      return Response.json({ ...output })
    }
    case "myntra": {
      const output = myntraCalculator({
        MRP: parseInt(sellPrice),
        productCategory: myntraProductCategory(pcat),
        tradeDiscount: parseInt(weight),
      })
      console.log({ myntra: output })
      return Response.json({ ...output })
    }
    case "ajio": {
      const output = ajioCalculator({
        MRP: parseInt(sellPrice),
        productCategory: ajioProductCategory(pcat),
        tradeDiscount: parseInt(weight),
      })
      console.log({ ajio: output })
      return Response.json({ ...output })
    }
    default: {
      return Response.json({
        error: "Plateform Type not supported. we are still working on it.",
      })
    }
  }
}
