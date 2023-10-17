function calculateFixedFee(sellingPrice: number, isFBA: boolean): number {
  let isFBAin = isFBA ? "fba" : "nfba"
  let fees: number = 0
  isFBAin = isFBAin.toLowerCase()
  if (sellingPrice <= 250) {
    fees = isFBAin === "fba" ? 25 : 3
  } else if (sellingPrice <= 500) {
    fees = isFBAin === "fba" ? 20 : 6
  } else if (sellingPrice <= 1000) {
    fees = isFBAin === "fba" ? 18 : 30
  } else {
    fees = isFBAin === "fba" ? 40 : 56
  }

  return fees
}

function calculateCommissionFee(
  productCategory: string,
  itemPrice: number
): number {
  switch (productCategory.toLowerCase()) {
    case "amazon device accessories":
    case "automotive and powersports":
      if (itemPrice <= 500) return itemPrice * 0.15
      if (itemPrice <= 1000) return itemPrice * 0.17
      return itemPrice * 0.18

    case "baby products":
      if (itemPrice <= 300) return itemPrice * 0.035
      if (itemPrice <= 500) return itemPrice * 0.055
      if (itemPrice <= 1000) return itemPrice * 0.07
      return itemPrice * 0.08

    case "backpacks and handbags":
      if (itemPrice <= 500) return itemPrice * 0.1
      return itemPrice * 0.12

    case "beauty, health, and personal care":
      if (itemPrice <= 300) return itemPrice * 0.025
      if (itemPrice <= 500) return itemPrice * 0.05
      return itemPrice * 0.08

    case "books":
      if (itemPrice <= 250) return itemPrice * 0.03
      if (itemPrice <= 500) return itemPrice * 0.045
      if (itemPrice <= 1000) return itemPrice * 0.09
      return itemPrice * 0.125

    case "business, industrial, and scientific supplies":
      if (itemPrice <= 15000) return itemPrice * 0.115
      return itemPrice * 0.05

    case "baby products, toys & education":
      if (itemPrice <= 300) return itemPrice * 0.045
      if (itemPrice <= 500) return itemPrice * 0.055
      return itemPrice * 0.08

    case "music, movies, video games, entertainment":
      if (itemPrice <= 300) return itemPrice * 0.03
      if (itemPrice <= 500) return itemPrice * 0.045
      if (itemPrice <= 1000) return itemPrice * 0.09
      return itemPrice * 0.125

    case "industrial, medical, scientific supplies & office products":
      if (itemPrice <= 15000) return itemPrice * 0.115
      return itemPrice * 0.05

    case "clothing, fashion, fashion accessories, jewellery, luggage, shoes":
      if (itemPrice <= 500) return itemPrice * 0.12
      if (itemPrice <= 1000) return itemPrice * 0.14
      return itemPrice * 0.22

    case "electronics (camera, mobile, pc, wireless) & accessories":
      if (itemPrice <= 150) return itemPrice * 0.03
      if (itemPrice <= 300) return itemPrice * 0.18
      if (itemPrice <= 500) return itemPrice * 0.2
      return itemPrice * 0.25

    case "grocery, food & pet supplies":
      if (itemPrice <= 300) return itemPrice * 0.02
      if (itemPrice <= 500) return itemPrice * 0.105
      return itemPrice * 0.12

    case "health, beauty, personal care & personal care appliances":
      if (itemPrice <= 300) return itemPrice * 0.025
      if (itemPrice <= 500) return itemPrice * 0.05
      return itemPrice * 0.08

    case "personal care appliances":
      if (itemPrice <= 500) return itemPrice * 0.095
      return itemPrice * 0.145

    case "home, décor, home improvement, furniture, outdoor":
      if (itemPrice <= 500) return itemPrice * 0.105
      return itemPrice * 0.125

    case "lawn & garden":
      if (itemPrice <= 300) return itemPrice * 0.13
      if (itemPrice <= 15000) return itemPrice * 0.1
      return itemPrice * 0.05

    case "kitchen, large & small appliance":
      if (itemPrice <= 300) return itemPrice * 0.075
      if (itemPrice <= 500) return itemPrice * 0.1
      return itemPrice * 0.125

    case "sports, gym & sporting equipment":
      if (itemPrice <= 300) return itemPrice * 0.06
      if (itemPrice <= 500) return itemPrice * 0.08
      if (itemPrice <= 1000) return itemPrice * 0.1
      return itemPrice * 0.12

    case "other":
      return itemPrice * 0.18

    default:
      return itemPrice * 0.18
  }
}

function calculateShippingFee(
  productWeight: number,
  shippingZone: string,
  isFBF: boolean
): number {
  productWeight = productWeight / 1000
  shippingZone = shippingZone.toLowerCase()
  let shippingFee: number = 0
  const isFBAin = isFBF ? "fba" : "nfba"

  if (shippingZone === "local") {
    if (productWeight <= 0.5) {
      shippingFee = isFBAin === "fba" ? 31 : 44
    } else if (productWeight <= 1) {
      shippingFee = isFBAin === "fba" ? 44 : 57
    } else if (productWeight <= 5) {
      shippingFee = isFBAin === "fba" ? 44 : 57
      shippingFee = shippingFee + Math.ceil(productWeight - 1) * 21
    } else if (productWeight <= 12) {
      shippingFee = isFBAin === "fba" ? 44 : 57
      shippingFee = shippingFee + Math.ceil(productWeight - 1) * 21
      shippingFee = shippingFee + Math.ceil(productWeight - 5) * 12
    } else {
      const fbaHeavy = Math.ceil(productWeight - 12) * 2.5 + 88
      const nfbaHeavy = Math.ceil(productWeight - 12) * 5 + 192
      shippingFee = isFBAin === "fba" ? fbaHeavy : nfbaHeavy
    }
  } else if (shippingZone === "regional") {
    if (productWeight <= 0.5) {
      shippingFee = isFBAin === "fba" ? 40 : 53
    } else if (productWeight <= 1) {
      shippingFee = isFBAin === "fba" ? 57 : 70
    } else if (productWeight <= 5) {
      shippingFee = isFBAin === "fba" ? 57 : 70
      shippingFee = shippingFee + Math.ceil(productWeight - 1) * 27
    } else if (productWeight <= 12) {
      shippingFee = isFBAin === "fba" ? 57 : 70
      shippingFee = shippingFee + Math.ceil(productWeight - 1) * 27
      shippingFee = shippingFee + Math.ceil(productWeight - 5) * 13
    } else {
      const fbaHeavy = Math.ceil(productWeight - 12) * 2.5 + 88
      const nfbaHeavy = Math.ceil(productWeight - 12) * 5 + 192
      shippingFee = isFBAin === "fba" ? fbaHeavy : nfbaHeavy
    }
  } else {
    if (productWeight <= 0.5) {
      shippingFee = isFBAin === "fba" ? 61 : 74
    } else if (productWeight <= 1) {
      shippingFee = isFBAin === "fba" ? 86 : 99
    } else if (productWeight <= 5) {
      shippingFee = isFBAin === "fba" ? 86 : 99
      shippingFee = shippingFee + Math.ceil(productWeight - 1) * 33
    } else if (productWeight <= 12) {
      shippingFee = isFBAin === "fba" ? 86 : 99
      shippingFee = shippingFee + Math.ceil(productWeight - 1) * 33
      shippingFee = shippingFee + Math.ceil(productWeight - 5) * 16
    } else {
      const fbaHeavy = Math.ceil(productWeight - 12) * 6 + 177.5
      const nfbaHeavy = Math.ceil(productWeight - 12) * 6 + 371
      shippingFee = isFBAin === "fba" ? fbaHeavy : nfbaHeavy
    }
  }

  return shippingFee
}

export default function calculateTotalAmazonFeesAndGST(args: {
  sellingPrice: number
  productWeight: number
  isFBF: boolean
  productCategory: string
  shippingZones: string
}): {
  totalFees: number
  gst: number
  fixedFee: number
  commissionRate: number
  collectionFee: number
  shippingFee: number
  sellingPrice: number
  totalAmazonFee: number
  netMargin: number
  netMarginPercentage: number
  deductionMargin: number
} {
  const { sellingPrice, productWeight, isFBF, productCategory, shippingZones } =
    args

  // Define fee rates based on the provided information
  const fixedFee: number = calculateFixedFee(sellingPrice, isFBF)

  // Define commission rates for different product categories
  const commissionRate: number = calculateCommissionFee(
    productCategory,
    sellingPrice
  )

  // Calculate collection fee based on payment mode
  const collectionFee: number = 0

  // Calculate shipping fee based on zone
  const shippingFee: number = calculateShippingFee(
    productWeight,
    shippingZones,
    isFBF
  )

  // Calculate Total Amazon fees
  const totalFees: number =
    fixedFee + commissionRate + collectionFee + shippingFee

  // Calculate GST on Total Amazon fees
  const gst: number = (totalFees / 100) * 18
  const totalAmazonFee: number = totalFees + gst
  const netMargin: number = sellingPrice - totalAmazonFee
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
    totalAmazonFee,
    netMargin,
    netMarginPercentage,
    deductionMargin,
  }
}

export const mapProductCategory = (catNum: string): string => {
  const map = new Map<string, string>([
    ["1", "amazon device accessories"],
    ["2", "automotive and powersports"],
    ["3", "baby products"],
    ["4", "backpacks and handbags"],
    ["5", "beauty, health, and personal care"],
    ["6", "books"],
    ["7", "business, industrial, and scientific supplies"],
    ["8", "baby products, toys & education"],
    ["9", "music, movies, video games, entertainment"],
    ["10", "industrial, medical, scientific supplies & office products"],
    ["11", "clothing, fashion, fashion accessories, jewellery, luggage, shoes"],
    ["12", "electronics (camera, mobile, pc, wireless) & accessories"],
    ["13", "grocery, food & pet supplies"],
    ["14", "health, beauty, personal care & personal care appliances"],
    ["15", "personal care appliances"],
    ["16", "home, décor, home improvement, furniture, outdoor"],
    ["17", "lawn & garden"],
    ["18", "kitchen, large & small appliance"],
    ["19", "sports, gym & sporting equipment"],
    ["20", "other"],
  ])

  return map.get(catNum) || "not found"
}
