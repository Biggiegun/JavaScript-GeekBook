
function validacion() {

mensaje = document.querySelector('.mensaje');
let nombre = document.querySelector('.input').value;

if(nombre == "David" || nombre == "Oscar" || nombre == "John"){
mensaje.innerHTML = `Bienvenido, ${nombre}`;

}
else{
    mensaje.innerHTML = `Lo siento pero el usuario que has introducido no está registrado`;
}

}


document.querySelector('.validar').addEventListener('click', validacion);