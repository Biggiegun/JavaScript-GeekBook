function Cambio(){
    let x = document.querySelector('.dato').value;
    let y =document.querySelector('.salida');
    return  y.innerHTML = `<p> Hola ${x}.</p>`;

}



document.querySelector('.boton').addEventListener('click', Cambio);