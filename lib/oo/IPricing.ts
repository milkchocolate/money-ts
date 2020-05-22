export default interface IPricing {
  calculateFinalPrice(listingPrice: number): number;
}
