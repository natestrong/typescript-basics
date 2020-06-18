class Coupon {
    static allowed = ['Pepperoni', 'Pineapple']

    static create(percentage: number) {
        return `PIZZA_RESTAURANT_${percentage}`
    }
}

console.log(Coupon.allowed)
console.log(Coupon.create(25))