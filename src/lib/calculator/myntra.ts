import { MyntraResponse } from "../types"

function calculateCommissionFee(
  sellingPrice: number,
  productCategory: string
): number {
  let commissionRate: number
  productCategory = productCategory.toLowerCase()

  switch (productCategory) {
    case "clothing & accessories":
    case "food & nutrition":
    case "edible oil":
    case "footwear":
    case "painting & posters":
    case "artificial jewelry":
    case "soap":
    case "cosmetic":
    case "health & wellness":
      commissionRate = 15
      break

    case "kitchen cookware & serveware":
    case "home & kitchen":
      commissionRate = 17
      break

    case "health & beauty":
      commissionRate = 10
      break

    case "clothing & apparels":
      commissionRate = 17
      break

    default:
      commissionRate = 15
  }

  // Calculate the commission fee
  const commissionFee: number = (commissionRate / 100) * sellingPrice
  return commissionFee
}

export default function calculateMyntraFee(args: {
  MRP: number
  productCategory: string
  tradeDiscount: number
}): MyntraResponse {
  const { MRP, productCategory, tradeDiscount } = args

  const discount = (MRP / 100) * tradeDiscount
  const sellingPrice = MRP - discount

  const fixedFees = 0.04 * sellingPrice

  const marketPlaceFees = calculateCommissionFee(sellingPrice, productCategory)

  const shipmentFee = 74

  const overallGST = sellingPrice * 0.12

  const GMV = sellingPrice * 0.02

  const totalPlateformFee =
    fixedFees + overallGST + marketPlaceFees + shipmentFee + GMV

  const netAmountToPay = sellingPrice - totalPlateformFee

  const netMarginPercentage = (netAmountToPay / sellingPrice) * 100

  return {
    sellingPrice,
    discount,
    overallGST,
    GMV,
    shipmentFee,
    fixedFees,
    commissionRate: marketPlaceFees,
    totalPlateformFee,
    netAmountToPay,
    netMarginPercentage,
  }
}

export const mapProductCategory = (catNum: string): string => {
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
