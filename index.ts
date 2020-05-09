import calculateFinalPriceForListingPrice from './lib/calculateFinalPriceForListingPrice.ts'

const listingPrice = 100
const finalPrice = calculateFinalPriceForListingPrice(listingPrice)
console.log(finalPrice)
