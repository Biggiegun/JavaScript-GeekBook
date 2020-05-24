let total = 128; //€
let pagoPersona = (total-2)/9; //€
let pagoAna = pagoPersona + 2; //€
let prueba = 8*pagoPersona+pagoAna;

let resultado = document.querySelector('#pago');
resultado.innerHTML =pagoPersona+" €"+", y el pago de ana asciende a: "+pagoAna+" €";