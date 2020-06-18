export {}

interface SizeInterface {
    availableSizes: string[]
}

interface PizzaInterface extends SizeInterface {
    readonly name: string
    toppings: string[]

    updateSizes(sizes: string[]): void

    addTopping(topping: string): void
}

abstract class Sizes implements SizeInterface {
    protected constructor(protected sizes: string[]) {
    }

    get availableSizes(): string[] {
        return this.sizes;
    }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }
}

class Pizza extends Sizes implements PizzaInterface {
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