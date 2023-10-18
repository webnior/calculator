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
      commissionRate = 22
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
}): {
  sellingPrice: number
  discount: number
  overallGST: number
  logisticDeductionFees: number
  shipmentFees: number
  fixedFees: number
  marketPlaceFees: number
  totalMyntraFees: number
  netAmountToPay: number
  netMarginPercentage: number
} {
  const { MRP, productCategory, tradeDiscount } = args

  const discount = (MRP / 100) * tradeDiscount
  const sellingPrice = MRP - discount

  const fixedFees = 15

  const marketPlaceFees = calculateCommissionFee(sellingPrice, productCategory)

  const shipmentFees = 77

  const overallGST = sellingPrice * 0.05

  const logisticDeductionFees = sellingPrice * 0.1

  const totalMyntraFees =
    fixedFees +
    overallGST +
    marketPlaceFees +
    shipmentFees +
    logisticDeductionFees

  const netAmountToPay = sellingPrice - totalMyntraFees

  const netMarginPercentage = (netAmountToPay / sellingPrice) * 100

  return {
    sellingPrice,
    discount,
    overallGST,
    logisticDeductionFees,
    shipmentFees,
    fixedFees,
    marketPlaceFees,
    totalMyntraFees,
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
