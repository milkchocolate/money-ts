export default (
  applyDiscount: Function,
  applyTax: Function,
  listingPrice: number,
) => {
  return applyTax(applyDiscount(listingPrice));
};
