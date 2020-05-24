const defaultAvatar = 'http://placehold.it/300x300';
const userAvatar = 'http://www.fillmurray.com/300/300';

function validacion() {

let container =document.querySelector('.img_container');
var x = document.querySelector('.input').value;

if(x == "s"){
container.innerHTML = `<img src="${userAvatar}" alt="User avatar">`;

}
else{
    container.innerHTML = `<img src="${defaultAvatar}" alt="User avatar">`;
}

}


document.querySelector('.validar').addEventListener('click', validacion);