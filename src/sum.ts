// src/sum.ts

export function sum(...values: number[]): number {
    let result: number = 0;
    for (const val of values) {
        result += val;
    }

    return result;

    // // reduce() collapses a list into a single value.
    // // The second argument is the starting point - do not omit it.
    // return values.reduce();
}