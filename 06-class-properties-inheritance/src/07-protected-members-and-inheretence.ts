export {}

abstract class Sizes {
    protected constructor(protected sizes: string[]) {
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

    constructor(readonly name: string, sizes: string[]) {
        super(sizes)
    }

    updateSizes(sizes: string[]) {
        this.sizes = sizes
    }

    addTopping(topping: string) {
        this.toppings.push(topping)
    }
}

const pizza = new Pizza('Pepperoni', ['x-small', 'small'])
pizza.addTopping('pepperoni')
pizza.updateSizes([...pizza.availableSizes, 'xx-large'])

console.log(pizza)