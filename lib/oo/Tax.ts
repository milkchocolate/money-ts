import ITax from "./ITax.ts";

export default class Tax implements ITax {
  taxRate: number;

  constructor(taxRate: number) {
    this.taxRate = taxRate;
  }

  applyTax(amount: number): number {
    return amount * (1 + this.taxRate);
  }
}
