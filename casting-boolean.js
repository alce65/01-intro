let q;
q = 'No Pepe';
console.log(q, Boolean(q));

// Falsy
q = false;
console.log(q, Boolean(q));
q = '';
console.log(q, Boolean(q));
q = 0;
console.log(q, Boolean(q));
q = -0;
console.log(q, Boolean(q));
q = null;
console.log(q, Boolean(q));
q = undefined;
console.log(q, Boolean(q));
q = NaN;
console.log(q, Boolean(q));

// ¿Truthy?

q = {};
console.log(q, Boolean(q));
q = [];
console.log(q, Boolean(q));

q = 'No Si Pepe ';
let isQ = !!q;
console.log(isQ);

if (q) {
    // Cuando no es cero
}

if (!q) {
    // Cuando es cero
}
