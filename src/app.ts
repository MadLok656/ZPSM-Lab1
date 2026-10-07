// src/app.ts

import { sum } from './sum.ts'



const course: string = "ZPSM";
const year: number = 2026;

console.log(`${course} ${year} - environment is up`);


console.log( sum(1,2,3,4,5) );
console.log( sum(2,4,6) );
console.log( sum() );


console.log( sum('a', 1, 1, 0xA, 1, "ala ma kota", "1", 1.5, 0.5) );
console.log( sum(5, '5') );
console.log( sum(1, NaN, 2) );
console.log( sum(1, Infinity, 2) );
console.log( sum(1, undefined, 2) );


console.log( sum(1, 2, 'text', 4, 'string') );
console.log( sum(2, {}, 6) );