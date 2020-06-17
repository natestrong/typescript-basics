export {}

const pizza = {
    name: 'pepperoni'
}

const toppings = ['pepperoni']

const order = {
    ...pizza,
    toppings
}

const finalOrder = {...order, coupon: 25}

console.log(order)
console.log(finalOrder)