let counter = 0;
let temp;
let seguir = document.querySelector('#continue');

let AskQuestion = () => {
  const msg = document.querySelector('.msg');
  alert('¿te has dormido?');
  msg.innerHTML = '¿te has dormido?';
}

setTimeout(AskQuestion, 10000);


Restart = () => {
    location.reload();
}

seguir.addEventListener('click',Restart);