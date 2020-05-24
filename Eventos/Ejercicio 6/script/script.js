// 'r' rojo, 'm' morado
var fondo = document.querySelector('body');
const key = document.querySelector('#key');

keyTrigger = (e) =>{
 
    if(event.key == 'r'){
    key.textContent += `${e.code}`;
    fondo.classList.add('rojo');
}else if(event.key == 'm'){
    key.textContent += `${e.code}`;
    fondo.classList.add('morado');
}else{
    key.textContent += `${e.code}`;
    fondo.classList.add('limpiar');
}
    
}

document.addEventListener('keypress', keyTrigger);
