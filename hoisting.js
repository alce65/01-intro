foo();
function foo() {
    console.log('Soy foo');
}

const bar = function () {
    console.log('Soy bar');
};

bar();

const barrr = () => {
    console.log('Soy barrr');
};

barrr();

// IIFE
((user) => {
    console.log('Hola ' + user + ', Soy anonima');
})('Pepe');

((user) => {
    console.log('Adios ' + user + ', también soy anonima');
})('Juan');
