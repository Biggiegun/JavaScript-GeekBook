let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  time.innerHTML = counter;
}

setInterval(incrementAndShowCounter, 2000);

// Ese tipo de funciones se denominan funciones Asíncronas.