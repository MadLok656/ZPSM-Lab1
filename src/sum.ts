// src/sum.ts

export function sum(...values: number[]): number {
    const initVal: number = 0;
    return values.reduce((acc, curVal) => acc + curVal, initVal);
}