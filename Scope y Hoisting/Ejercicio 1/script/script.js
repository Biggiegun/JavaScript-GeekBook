let message = 'El resultado será A';

function changeMessage() {
  message = 'El resultado será B';
}

changeMessage();

console.log(message); // se ejecuta el método changeMessage y se imprime "message" del ámbito más cercano. 
// el valor de "message" que se tiene dentro del método o función.

let message = 'El resultado será A';

function changeMessage() {
  message = 'El resultado será B';
}

console.log(message); // se imprime message directamente del scope global. dado que no se ejecuta en 
//ningún momento el método.

let message = 'El resultado será A';

function changeMessage() {
  let message = 'El resultado será B';
}

changeMessage();

console.log(message);
// El resultado de imprimir por consola message es traer el valor de la misma, 
// que se encuentra definido en el scope global, dado que la variable "message"
//dentro del método está definida para ese scope por estar precesida de un
// let.