import calculateFinalPriceForListingPrice from "./lib/fp/calculateFinalPriceForListingPrice.ts";
import { pricing } from "./lib/oo/objectContainer.ts";

const listingPrice = 100;

console.log("fp");
const fpFinalPrice = calculateFinalPriceForListingPrice(listingPrice);
console.log(fpFinalPrice);

console.log()

console.log("oo");
const ooFinalPrice = pricing.calculateFinalPrice(listingPrice);
console.log(ooFinalPrice);
