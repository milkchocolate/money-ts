import IPricing from "./IPricing.ts";
import IDiscount from "./IDiscount.ts";
import ITax from "./ITax.ts";

export class Pricing implements IPricing {
  discount: IDiscount;
  tax: ITax;

  constructor(discount: IDiscount, tax: ITax) {
    this.discount = discount;
    this.tax = tax;
  }

  calculateFinalPrice(listingPrice: number): number {
    const discountedPrice = this.discount.applyDiscount(listingPrice);
    return this.tax.applyTax(discountedPrice)
  }
}
