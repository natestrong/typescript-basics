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

class Pizza extends Sizes {
    toppings: string[] = []

    constructor(readonly name: string, public sizes: string[]) {
        super(sizes)
    }

    addTopping(topping: string) {
        this.toppings.push(topping)
    }
}

const pizza = new Pizza('Pepperoni', ['x-small', 'small'])
pizza.addTopping('pepperoni')
pizza.availableSizes = [...pizza.availableSizes, 'large']

console.log(pizza)