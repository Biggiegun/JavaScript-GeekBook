let counter = 0;
let temp;
let detener = document.querySelector('#stop');
let seguir = document.querySelector('#continue');

const incrementAndShowCounter = () => {
    counter++;
    const time = document.querySelector('.time');
    time.innerHTML = counter;
   
  }
  temp = setInterval(incrementAndShowCounter, 1000);


let Parar = () =>{
    clearInterval(temp);
    
  }

detener.addEventListener('click',Parar);

Restart = () => {
    location.reload();
}

seguir.addEventListener('click',Restart);