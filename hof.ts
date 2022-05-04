function increment(a: number): number {
    return a+1
}

function incrementTwice(a: number): number {
    return increment(increment(a))
}


function twice (fn: Function): Function {
    return function(...args: unknown[]) {
        return fn(fn(...args))
    }
}

const anotherIncrementTwice = twice(increment)
