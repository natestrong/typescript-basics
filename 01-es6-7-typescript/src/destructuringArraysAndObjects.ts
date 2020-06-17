export {}

const pizza = {
    name: 'Pepperoni',
    toppings: ['pepperoni']
}

// Can use object destructuring to fill in function parameters
function order({name: pizzaName, toppings: pizzaToppings}) {
    return {pizzaName, pizzaToppings}
}

order(pizza)

// Can use object destructuring to pull a variable for an object
const {pizzaName} = order(pizza)

console.log(pizzaName)


const toppings = ['pepperoni', 'bacon', 'chilli']

// Can use destructuring on an array
const [first, second, third] = toppings

console.log(first)
console.log(second)
console.log(third)

// Can use array destructuring to fill in function parameters
function logToppings([first, second, third]: any) {
 console.log(first)
 console.log(second)
 console.log(third)
}

logToppings(toppings)