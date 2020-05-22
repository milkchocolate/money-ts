export default (discountRate: number, amount: number) => {
  const discount = amount * discountRate;
  return amount - discount;
};
