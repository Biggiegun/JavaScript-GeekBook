function Cambio(){
    let x = document.querySelector('.cambiame');
    return  x.innerHTML = `<p> Mi primer click, ¡ole yo y la mujer que me parió! </p>`;

}



document.querySelector('.boton').addEventListener('click', Cambio);