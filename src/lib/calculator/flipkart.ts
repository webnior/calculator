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

function calculateShippingFee(weight: number, destinationZone: string): number {
  let shippingFee: number = 0

  switch (true) {
    case weight <= 0.5:
      shippingFee =
        destinationZone === "Intracity"
          ? 47
          : destinationZone === "Intrazone"
          ? 54
          : 68
      break
    case weight <= 1:
      shippingFee =
        destinationZone === "Intracity"
          ? 4
          : destinationZone === "Intrazone"
          ? 19
          : 26
      break
    case weight <= 1.5:
      shippingFee =
        destinationZone === "Intracity"
          ? 13
          : destinationZone === "Intrazone"
          ? 17
          : 28
      break
    case weight <= 2:
      shippingFee =
        destinationZone === "Intracity"
          ? 10
          : destinationZone === "Intrazone"
          ? 18
          : 22
      break
    case weight <= 2.5:
      shippingFee =
        destinationZone === "Intracity"
          ? 8
          : destinationZone === "Intrazone"
          ? 11
          : 17
      break
    case weight <= 3:
      shippingFee =
        destinationZone === "Intracity"
          ? 8
          : destinationZone === "Intrazone"
          ? 11
          : 17
      break
    case weight <= 4:
      shippingFee =
        destinationZone === "Intracity"
          ? 7
          : destinationZone === "Intrazone"
          ? 10
          : 16
      break
    case weight <= 5:
      shippingFee =
        destinationZone === "Intracity"
          ? 7
          : destinationZone === "Intrazone"
          ? 10
          : 16
      break
    default:
      shippingFee = 0 // Default fee if weight exceeds 5 kgs
  }

  if (weight > 0.5 && weight <= 3) {
    shippingFee = (weight / 0.5) * shippingFee
  } else if (weight > 3) {
    shippingFee = weight * shippingFee
  }

  return shippingFee
}

export default function calculateTotalFlipkartFeesAndGST(
  sellingPrice: number,
  productWeight: number,
  isFBF: boolean,
  productCategory: string,
  shippingZones: string
): { totalFees: number; gst: number } {
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

  console.log("Fixed Fee:", fixedFee)
  console.log("Commission Fee:", commissionRate)
  console.log("Collection Fee:", collectionFee)
  console.log("Shipping Fee:", shippingFee)
  console.log("18% gst on total fees", gst)
  return { totalFees, gst }
}
