import config from "../../config.ts";
import Discount from "./Discount.ts";
import Tax from "./Tax.ts";
import { Pricing } from "./Pricing.ts";

const discount = new Discount(config.discountRate);
const tax = new Tax(config.taxRate);
const pricing = new Pricing(discount, tax);

export {
  pricing,
};
