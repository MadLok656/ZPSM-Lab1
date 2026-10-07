function twice(value:number): number {
    return value * 2;
}

// The annotation says "number". At runtime, nothing enforces that.
// This is exactly what a server response looks like: declared as one
// thing, delivered as another.

const fromOutside = 'text' as unknown as number;

console.log(twice(2));              // 4
console.log(twice(fromOutside));    // ?