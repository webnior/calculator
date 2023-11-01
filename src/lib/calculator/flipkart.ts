import { FlipkartResponse } from "../types"

function calculateFixedFee(sellingPrice: number, isFBF: boolean): number {
  let fee: number

  switch (true) {
    case sellingPrice <= 300:
      fee = isFBF ? 14 : 16
      break
    case sellingPrice <= 500:
      fee = isFBF ? 14 : 16
      break
    case sellingPrice <= 1000:
      fee = isFBF ? 30 : 30
      break
    default:
      fee = isFBF ? 50 : 55
  }

  return fee
}

function calculateCommissionFee(
  sellingPrice: number,
  productName: string
): number {
  let commissionRate: number
  console.log({ productName })

  switch (productName.toLowerCase()) {
    case "clothing & accessories":
      commissionRate = 19
      break

    case "food & nutrition":
      commissionRate = 6
      break

    case "kitchen cookware & serveware":
      commissionRate = 16
      break

    case "edible oil":
      commissionRate = 6
      break

    case "health & beauty":
      commissionRate = 6
      break

    case "footwear":
      commissionRate = 13
      break

    case "painting & posters":
      commissionRate = 8
      break

    case "artificial jewelry":
      commissionRate = 17
      break

    case "soap":
      commissionRate = 3
      break

    case "cosmetic":
      commissionRate = 4
      break

    case "health & wellness":
      commissionRate = 4
      break

    case "clothing & apparels":
      commissionRate = 3
      break

    case "home & kitchen":
      commissionRate = 15
      break

    default:
      commissionRate = 15
  }

  // Calculate the commission fee
  const commissionFee: number = (commissionRate / 100) * sellingPrice
  return commissionFee
}

function calculateCollectionFee(sellingPrice: number): number {
  let fee: number

  if (sellingPrice <= 750) {
    fee = 12.5
  } else {
    fee = (sellingPrice * 2) / 100
  }

  return fee
}

function calculateShippingFee(weight: number, shippingZones: string): number {
  let shippingFee = 0
  weight = weight / 1000
  if (shippingZones.toLowerCase() === "local") {
    if (weight < 0.5) {
      shippingFee = 47
    } else if (weight <= 1) {
      shippingFee = 51
    } else if (weight <= 1.5) {
      shippingFee = 64
    } else if (weight <= 2) {
      shippingFee = 74
    } else if (weight <= 2.5) {
      shippingFee = 82
    } else if (weight <= 3) {
      shippingFee = 90
    } else if (weight <= 4) {
      shippingFee = 97
    } else if (weight <= 5) {
      shippingFee = 104
    } else {
      weight = weight - 5
      shippingFee = 104 + 7 * weight
    }
  } else if (shippingZones.toLowerCase() === "regional") {
    if (weight < 0.5) {
      shippingFee = 54
    } else if (weight <= 1) {
      shippingFee = 73
    } else if (weight <= 1.5) {
      shippingFee = 90
    } else if (weight <= 2) {
      shippingFee = 108
    } else if (weight <= 2.5) {
      shippingFee = 119
    } else if (weight <= 3) {
      shippingFee = 130
    } else if (weight <= 4) {
      shippingFee = 140
    } else if (weight <= 5) {
      shippingFee = 150
    } else {
      weight = weight - 5
      shippingFee = 150 + 10 * weight
    }
  } else {
    if (weight < 0.5) {
      shippingFee = 68
    } else if (weight <= 1) {
      shippingFee = 94
    } else if (weight <= 1.5) {
      shippingFee = 112
    } else if (weight <= 2) {
      shippingFee = 144
    } else if (weight <= 2.5) {
      shippingFee = 161
    } else if (weight <= 3) {
      shippingFee = 178
    } else if (weight <= 4) {
      shippingFee = 194
    } else if (weight <= 5) {
      shippingFee = 210
    } else {
      weight = weight - 5
      shippingFee = 210 + 16 * weight
    }
  }
  return shippingFee
}

export default function calculatetotalPlateformFeesAndGST(args: {
  sellingPrice: number
  productWeight: number
  isFBF: boolean
  productCategory: string
  shippingZones: string
}): FlipkartResponse {
  const { sellingPrice, productWeight, isFBF, productCategory, shippingZones } =
    args
  // Define fee rates based on the provided information
  const fixedFee: number = calculateFixedFee(sellingPrice, isFBF)

  // Define commission rates for different product categories
  const commissionRate: number = calculateCommissionFee(
    sellingPrice,
    productCategory
  )

  // Calculate collection fee based on payment mode
  const collectionFee: number = calculateCollectionFee(sellingPrice)

  // Calculate shipping fee based on zone
  const shippingFee: number = calculateShippingFee(productWeight, shippingZones)

  // Calculate Total Flipkart fees
  const totalFees: number =
    fixedFee + commissionRate + collectionFee + shippingFee

  // Calculate GST on Total Flipkart fees
  const gst: number = (totalFees / 100) * 18
  const totalPlateformFee: number = totalFees + gst
  const netMargin: number = sellingPrice - totalPlateformFee
  const netMarginPercentage: number = (netMargin / sellingPrice) * 100
  const deductionMargin: number = 100 - netMarginPercentage

  return {
    totalFees,
    gst,
    fixedFee,
    commissionRate,
    collectionFee,
    shippingFee,
    sellingPrice,
    totalPlateformFee,
    netMargin,
    netMarginPercentage,
    deductionMargin,
  }
}

export const flipkartProductCategory = (catNum: string): string => {
  const map = new Map<string, string>([
    ["1", "clothing & accessories"],
    ["2", "food & nutrition"],
    ["3", "kitchen cookware & serveware"],
    ["4", "edible oil"],
    ["5", "health & beauty"],
    ["6", "footwear"],
    ["7", "painting & posters"],
    ["8", "artificial jewelry"],
    ["9", "soap"],
    ["10", "cosmetic"],
    ["11", "health & wellness"],
    ["12", "clothing & apparels"],
    ["13", "home & kitchen"],
    ["14", "other"],
  ])

  return map.get(catNum) || "not found"
}
