const obj = {
    user: 'Pepe',
    age: 23,
};

let key;
if (Math.random() > 0.5) key = 'user';
else key = 'age';

console.log(obj[key]);
console.log(obj['user']);

console.log(obj.car && obj.car.brand);
console.log(obj.car?.brand?.foo?.bar);
