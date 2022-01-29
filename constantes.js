/* eslint-disable no-unused-vars */
const x = 2;
// x = 3;
// Assignment to constant variable.

const obj = {};
obj.user = 'Pepe';
console.log(obj);
// obj = {};
// Assignment to constant variable.
delete obj.user;
console.log(obj);

Object.freeze(obj);
// obj.user = 'Pepe';
// Cannot add property user, object is not extensible
