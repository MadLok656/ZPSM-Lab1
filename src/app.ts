// src/app.ts

import { sum } from './sum.ts'



const course: string = "ZPSM";
const year: number = 2026;

console.log(`${course} ${year} - environment is up`);


console.log( sum(1,2,3,4,5) );
console.log( sum(2,4,6) );
console.log( sum() );