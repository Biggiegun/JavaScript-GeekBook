
Mensaje = (e) =>{
    let nombre = document.querySelector('h1');
    const name = document.querySelector('.nombre').value;
    
    nombre.innerHTML="Hola " + name + "," + " encantado de conocerte :)";
};



document.querySelector('.boton').addEventListener('click',Mensaje);

