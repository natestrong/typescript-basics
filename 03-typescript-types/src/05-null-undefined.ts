export {}

let coupon: string | null = 'pizza25'

function removeCoupon() {
    coupon = null
}

console.log(coupon)

removeCoupon()

console.log(coupon)
