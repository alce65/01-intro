/* Primitivos => INMUTABLES */
console.log(2);
console.log('Pepe');
console.log(true);

/* Referenciados(Objetos) => MUTABLES */
console.log({});
console.log([]);
console.log(() => {});

/* Expresiones */
console.log(2 + 2);
console.log(4);

/* Tipos */

console.log(2, typeof 2);
console.log('Pepe', typeof 'Pepe');
console.log(true, typeof true);
console.log(false, typeof false);
console.log(undefined, typeof undefined);
console.log(null, typeof null, 'Mentira!!!!');
console.log(34n, typeof 34n);
console.log(Symbol(), typeof Symbol());

console.log({}, typeof {});
console.log([], typeof []);
console.log(new Date(), typeof new Date());
console.log(/a/, typeof /a/);
console.log(new Error('Error ...').message, typeof new Error());
console.log(Array.isArray([]));
console.log([] instanceof Array);
console.log(typeof (() => {}));

console.log('Juan', typeof 'Juan');
// toLowerCase('Juan');
console.log('Juan'.toLowerCase(), typeof 'Juan'.toLowerCase());

let reaction = 'yikes';
console.log(reaction[1]);

// reaction[0] = 'l';
// Error Cannot assign to read only property '0' of string 'yikes'
reaction = 'likes';

let aData = ['y', 'i', 'k'];
aData[0] = 'l';
console.log(aData);
aData.shades = 'grey';
console.log(aData);
// 'pepe'.shades = 'blue';
// Cannot create property 'shades' on string 'pepe'

const today = new Date();
today.shades = 'green';
console.log(today);
