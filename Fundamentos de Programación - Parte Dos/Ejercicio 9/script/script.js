
Mensaje = (e) =>{
    let nombre = document.querySelector('h1');
    const name = document.querySelector('.nombre').value;
    
    nombre.innerHTML=`El nombre de mi compañera es ${name}, y está compuesto por ${name.length} caracteres :)`;
};



document.querySelector('.boton').addEventListener('click',Mensaje);

