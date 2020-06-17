const pizzas = [
    {name: 'Pepperoni', toppings: ['pepperoni']},
    {name: 'Grand Slam', toppings: ['pepperoni, bacon, sausage, peanut butter']},
]

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase())

console.log(mappedPizzas)

const pizza = {
    name: 'Blazing Inferno',
    getName: function () {
        console.log(this.name)
    }
}

console.log(pizza.getName())