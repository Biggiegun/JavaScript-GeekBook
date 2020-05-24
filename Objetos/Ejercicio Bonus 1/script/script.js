var cara = document.querySelector("#face");
var cuerpo = document.querySelector("body");

let actualizarCara = () => {
  let min = Math.ceil(0);
  let max = Math.ceil(100);

  var number = Math.floor(Math.random() * (max - min)) + min;

  var chosen = document.querySelector('#estado');

  if (number % 2 == 0 && chosen.value == 1) {
    cara.innerHTML = ` :) <br> ${number}`;
  }else if(number % 2 == 0 && chosen.value == 2){
    cara.innerHTML = ` :( <br> ${number}`;
  }
  
  else if(number % 2 != 0 && chosen.value == 1){
    cuerpo.classList.add('orange');
    cara.innerHTML = ` :) <br> ${number}`;
  }else if (number % 2 != 0 && chosen.value == 2) {
    cuerpo.classList.add('orange');
    cara.innerHTML = ` :( <br> ${number}`;
    
  }
  
  
  
};

document.querySelector("#actualizar").addEventListener("click", actualizarCara);
