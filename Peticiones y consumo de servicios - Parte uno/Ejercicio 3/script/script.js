

let ActualizarEstado = () =>{


let texto = document.getElementById("texto").value;
let url = `https://api.github.com/users/${texto}`;
let img = document.querySelector('img');
let nombre = document.querySelector('#nombre');
let numRepos = document.querySelector('#numRepos');


/*, {
    method: 'POST', 
    body: JSON.stringify(username), 
    headers:{
      'Content-Type': 'application/json'
    }}*/

fetch(url)  
.then(response => response.json())  
.then(data => {nombre.innerHTML=data.name ,img.src= data.avatar_url ,numRepos.innerHTML = data.public_repos});

}

let boton = document.querySelector('#boton')
boton.addEventListener('click', ActualizarEstado);
