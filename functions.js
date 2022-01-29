export function add1(a, b) {
    const result = a + b;
    return result;
}

export const add = function (a, b) {
    const result = a + b;
    return result;
};

export const name = 'Pepe';

export const data = {
    user: 'Pepe',
    age: 23,
};

data.course = 'ES';

console.log(data);

add.author = 'Yo';

console.log(add);
