export {}

let sumOrder: (price: number, quantity?: number) => number

sumOrder = (x, y = 1) => {
    return x * y
}


const sum = sumOrder(25, 1)

console.log(`Total sum: ${sum}`)