let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const uva = document.querySelector('.uva');

  if(counter == 13){
    clearInterval(y);
  }else{
  uva.innerHTML = `${counter} uva(s)`;
  }
}

var y = setInterval(incrementAndShowCounter, 1000);

// Ese tipo de funciones se denominan funciones Asíncronas.