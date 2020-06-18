export {}

function orderError(error: string): never {
    throw new Error(error)
}

orderError('Something went wrong')