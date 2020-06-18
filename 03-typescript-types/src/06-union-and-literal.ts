export {}

let pizzaSize: string = 'small'

function selectSize(size: 'small' | 'medium' | 'large'): void {
    pizzaSize = size
}

selectSize('medium')

console.log('Pizza size:', pizzaSize)