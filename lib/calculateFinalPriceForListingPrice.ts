import config from '../config.json'
import applyDiscount from './applyDiscount.ts'
import applyTax from './applyTax.ts'
import calculateFinalPrice from './calculateFinalPrice.ts'

const generateCurriedCalculateFinalPrice = () => {
    const curriedApplyDiscount = curryApplyDiscount(config.discountRate, applyDiscount)
    const curriedApplyTax = curry(applyTax)(config.taxRate)
    return curry(calculateFinalPrice)(curriedApplyDiscount, curriedApplyTax)
}
 
// Simple version
const curryApplyDiscount = (rate: number, applyFn: Function) => (amount: number) => applyFn(rate, amount)

// Generic version
const curry = (func: Function) => {
    const curried = (...args: any[]) => {
        if (args.length >= func.length) {
            return func(...args)
        } else {
            return (...args2: any[]) => {
                return curried(...args.concat(args2));
            }
        }
    }
    return curried
}

export default generateCurriedCalculateFinalPrice()