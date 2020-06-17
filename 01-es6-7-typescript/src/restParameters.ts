export {}

function sumAll(message: string, ...arr: number[]) {
    console.log(message)
    return arr.reduce((prev, next) => prev + next)
}

const sum = sumAll('Hello', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

console.log(sum)