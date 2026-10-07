// src/app.ts

import { sum } from './sum.ts'



const course: string = "ZPSM";
const year: number = 2026;

console.log(`${course} ${year} - environment is up`);


console.log( sum(1,2,3,4,5) );
console.log( sum(2,4,6) );
console.log( sum() );
// console.log( sum('a') );         // Polecenie "npm run check" faktycznie wskazuje na ten fragment kodu (a dokładniej na 'a',
                                    // który jest typu 'string', gdy funkcja sum oczekuje wartości typu 'number').
                                    // Mimo to, node dalej wykonał skrypt (reduce dodał wartość początkową '0' do znaku 'a', zwracając i finalnie wypisując "0a").
