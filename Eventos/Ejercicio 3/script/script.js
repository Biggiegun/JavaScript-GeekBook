function Cambio(){
    
    let y =document.querySelector('.salida');
    return  y.innerHTML = `<p> lorem ipsum </p> <br> <p> lorem ipsum </p>`;

}



document.querySelector('.salida').addEventListener('mouseover', Cambio);