export {}

const pizza = {
    name: 'Pepperoni',
    price: 15,
    getName() {
        return this.name
    }
}

console.log(pizza.getName())

const toppings = ['pepperoni']

// If we wanted to create a new object by combining the above info,
// this is how we used to do it:
const order_1 = {
    pizza: pizza,
    toppings: toppings
}

// This can be re-written as:
const order_2 = {pizza, toppings}

console.log(order_1)
console.log(order_2)