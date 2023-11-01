import { AjioResponse } from "../types"

function calculateCommissionFee(
  sellingPrice: number,
  productCategory: string
): {
  commissionFee: number
  forwardShippingCost: number
  reverseShippingCost: number
} {
  let commissionRate: number
  let forwardShippingCost: number
  let reverseShippingCost: number
  productCategory = productCategory.toLowerCase()
  console.log({ productCategory })

  if (
    productCategory === "silver jewellery" ||
    productCategory === "silver items"
  ) {
    commissionRate = 0.2 // 20%
    forwardShippingCost = 120
    reverseShippingCost = 120
  } else if (productCategory === "gold and silver coins") {
    commissionRate = 0.05 // 5%
    forwardShippingCost = 120
    reverseShippingCost = 120
  } else if (
    productCategory === "fashion jewellery" ||
    productCategory === "artificial jewellery"
  ) {
    commissionRate = 0.3 // 30%
    forwardShippingCost = 65
    reverseShippingCost = 75
  } else {
    commissionRate = 0.23 // 23%
    forwardShippingCost = 95
    reverseShippingCost = 75
  }

  // Calculate the commission fee
  const commissionFee = sellingPrice * commissionRate

  return { commissionFee, forwardShippingCost, reverseShippingCost }
}

function calculateGst(
  sellingPrice: number,
  marketPlaceFee: number,
  productCategory: string
): { overallGstFee: number; reburshmentGstFee: number } {
  productCategory = productCategory.toLowerCase()
  let overallGstFee = 0
  let reburshmentGstFee = 0

  if (productCategory === "other") {
    overallGstFee = sellingPrice * 0.12
    reburshmentGstFee = marketPlaceFee * 0.05
  } else {
    overallGstFee = sellingPrice * 0.03
    reburshmentGstFee = marketPlaceFee * 0.03
  }

  return { overallGstFee, reburshmentGstFee }
}

export default function calculateTotalAjioFeesAndGST(args: {
  MRP: number
  productCategory: string
  tradeDiscount: number
}): AjioResponse {
  const { MRP, productCategory, tradeDiscount } = args

  const discount: number = (tradeDiscount * MRP) / 100
  const sellingPrice: number = MRP - discount

  const commissionFees = calculateCommissionFee(sellingPrice, productCategory)
  const forwardShipmentCost: number = commissionFees.forwardShippingCost
  const backwardShipmentCost: number = commissionFees.reverseShippingCost
  const marketPlaceFee: number = commissionFees.commissionFee

  let gst = calculateGst(sellingPrice, marketPlaceFee, productCategory)
  let overallGst: number = gst.overallGstFee
  let gstReburshment: number = gst.reburshmentGstFee

  const totalAjoFees: number =
    marketPlaceFee + forwardShipmentCost + overallGst - gstReburshment
  const netAmountToPay: number = sellingPrice - totalAjoFees
  const netMarginPercentage: number = (netAmountToPay / sellingPrice) * 100

  return {
    sellingPrice,
    discount,
    overallGst,
    forwardShipmentCost,
    backwardShipmentCost,
    marketPlaceFee,
    gstReburshment,
    totalAjoFees,
    netAmountToPay,
    netMarginPercentage,
  }
}

export const ajioProductCategory = (catNum: string): string => {
  const map = new Map<string, string>([
    ["1", "silver jewellery"],
    ["2", "silver items"],
    ["3", "gold and silver coins"],
    ["4", "fashion jewellery"],
    ["5", "artificial jewellery"],
    ["6", "other"],
  ])

  return map.get(catNum) || "not found"
}
