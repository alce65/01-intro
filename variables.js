// parámetros
const add = function (number1, number2) {
    const result = number1 + number2;
    return result;
};

// argumentos
add(1, 2);

add(13, 25);

const a = 13;
const b = 25;
add(a, b);

const answer = true;
// answer.opposite = false;
// Cannot create property 'opposite' on boolean 'true'
console.log(answer);

// let null = 12
// Error
// let undefined = 12;
// No recomendable
console.log(undefined);

function foo(x) {
    x = 'Hola ' + x;
    console.log(x);
}

/* ANTI-PATRÓN

function bar() {
    some = 'Hola ' + some;
    console.log(some);
} */

/* let some = 'Pepe';
foo(some); */

let some1 = 'Juan';
foo(some1);
// bar();

let x23;
console.log(x23);

// Error: undeclared variable
// console.log(mate);

let r = 2;
let date = 'Dia ' + r;

let n = '7';
console.log(r * n);
console.log(r * date, typeof (r * date));

console.log(r + Number(n));

console.log(Number.MAX_SAFE_INTEGER);
console.log(9_007_199_254_740_991n);
console.log(2 * 'a');
console.log(-2 / 0, typeof (-2 / 0));

console.log(typeof '❤😒🗑🤷‍♀️');

const str = 'Pepe';
const str2 = `Hola ${str}`;
console.log(str2);

console.log('Pepe'.length);

console.log('❤'.length);
console.log('😒'.length);
console.log('🗑'.length);
console.log('🤷‍♀️'.length);
console.log('❤😒🗑🤷‍♀️'.length);
