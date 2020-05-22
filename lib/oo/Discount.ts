import IDiscount from "./IDiscount.ts";

export default class Discount implements IDiscount {
  discountRate: number;

  constructor(discountRate: number) {
    this.discountRate = discountRate;
  }

  applyDiscount(amount: number): number {
    return amount - amount * this.discountRate;
  }
}
