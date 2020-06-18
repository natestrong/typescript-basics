export {}

class Sizes {
    constructor(public sizes: string[]) {
    }

    get availableSizes(): string[] {
        return this.sizes;
    }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }
}

const sizes = new Sizes(['small', 'medium'])
sizes.availableSizes = [...sizes.availableSizes, 'large']
console.log(sizes)

class Pizza {
    toppings: string[] = []

    constructor(readonly name: string) {
    }

    addTopping(topping: string) {
        this.toppings.push(topping)
    }
}

const pizza = new Pizza('Pepperoni')
pizza.addTopping('pepperoni')

console.log(pizza)
console.log(pizza.name)