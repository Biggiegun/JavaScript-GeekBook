const lower = 1;
const upper = 100;

const randomNumber = getRandomNumber(lower, upper); // Global Scope

function getRandomNumber(min, max) {
  console.log('Vamos a crear un número random');

  const message = 'Se ha generado un número aleatorio: '; // Local Scope
  const result = Math.floor((Math.random() * (max - min)) + min); 

  console.log(message + result); // Local Scope

  return result;
}