export type Plateforms = "flipkart" | "amazon" | "myntra" | "shopsy" | "ajio"

export type FlipkartResponse = {
  totalFees: number
  sellingPrice: number
  deductionMargin: number
  shippingFee: number
  collectionFee: number
  commissionRate: number
  fixedFee: number
  gst: number
  totalPlateformFee: number
  netMargin: number
  netMarginPercentage: number
}

export type AmazonResponse = {
  shippingFee: number
  collectionFee: number
  commissionRate: number
  fixedFee: number
  gst: number
  totalPlateformFee: number
  netMargin: number
  netMarginPercentage: number
  totalFees: number
  sellingPrice: number
  deductionMargin: number
}
export type AjioResponse = {
  sellingPrice: number
  discount: number
  overallGst: number
  forwardShipmentCost: number
  backwardShipmentCost: number
  marketPlaceFee: number
  gstReburshment: number
  totalAjoFees: number
  netAmountToPay: number
  netMarginPercentage: number
}
export type ShopsyResponse = {
  shippingFee: number
  collectionFee: number
  commissionRate: number
  fixedFee: number
  gst: number
  totalPlateformFee: number
  netMargin: number
  netMarginPercentage: number
}
export type MyntraResponse = {
  shipmentFee: number
  commissionRate: number
  fixedFees: number
  overallGST: number
  totalPlateformFee: number
  netAmountToPay: number
  netMarginPercentage: number
  sellingPrice: number
  discount: number
  logisticDeductionFees: number
}

export type ResponseKeys =
  | keyof FlipkartResponse
  | keyof AmazonResponse
  | keyof AjioResponse
  | keyof ShopsyResponse
  | keyof MyntraResponse

export type ColumnType = {
  flipkart: {
    [key in keyof FlipkartResponse]?: string
  }
  amazon: {
    [key in keyof AmazonResponse]?: string
  }
  ajio: {
    [key in keyof AjioResponse]?: string
  }
  myntra: {
    [key in keyof MyntraResponse]?: string
  }
  shopsy: {
    [key in keyof ShopsyResponse]?: string
  }
}
