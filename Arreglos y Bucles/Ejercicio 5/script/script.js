const arreglo = [4, 2, 7, 8, 6];

let acc = 0;

for (let i = 0; i < arreglo.length; i++) {
  acc += arreglo[i];
  media = (acc / arreglo.length).toFixed(2);
}

console.log("La media es " + media);

/////////////////////////////////////////////////

arreglo[5] = 10;
let acc1 = 0;

for (let i = 0; i < arreglo.length; i++) {
  acc1 += arreglo[i];
  media = (acc1 / arreglo.length).toFixed(2);
}

console.log("La media es " + media);

/////////////////////////////////////////////////////

const arreglo1 = [2, 4, 6];

let Promedio = () => {
  let accumulator = 0;

  for (let i = 0; i < arreglo1.length; i++) {
    accumulator += arreglo1[i];
    media = (accumulator / arreglo1.length).toFixed(2);
  }

  console.log("La media es " + media);
};

Promedio();
