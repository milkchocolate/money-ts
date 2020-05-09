export default (taxRate: number, amount: number) => {
    const tax = amount * taxRate
    return amount + tax
}