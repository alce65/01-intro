const human = {
    teeth: 32,
};
console.log({ human });

const gwen = {
    // eslint-disable-next-line no-undef
    __proto__: human,
};
// eslint-disable-next-line no-undef
gwen.__proto__.teeth = 31;
console.log({ human });
console.log({ gwen });
console.log(gwen.teeth);

const pepita = Object.assign(human);
pepita.name = 'Pepita';
console.log(pepita.teeth);

const mammals = {
    lung: 2,
};

human.__proto__ = mammals;

console.log(pepita.lung);

console.log(JSON.stringify(pepita));
console.log(pepita.toString());
// eslint-disable-next-line no-prototype-builtins
console.log(pepita.hasOwnProperty('name'));
// eslint-disable-next-line no-prototype-builtins
console.log(pepita.hasOwnProperty('lung'));

const obj = {};
obj.__proto__.smell = 'good';

console.log(pepita.smell);
console.log(gwen.smell);
