let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');

  if(counter<60){
  time.innerHTML = `escrito hace ${counter} segundos`;
  }else{
    time.innerHTML = `escrito hace 1 min`;

  }

}

setInterval(incrementAndShowCounter, 1000);