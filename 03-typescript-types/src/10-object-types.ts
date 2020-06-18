export {}

let pizza: { name: string, price: number, getName(): string }

pizza = {
    name: 'pepperoni',
    price: 20,
    getName(): string {
        return pizza.name
    }
}

console.log(pizza.getName())