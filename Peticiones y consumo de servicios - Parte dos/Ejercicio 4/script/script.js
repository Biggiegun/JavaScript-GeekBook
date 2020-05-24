let boton = document.querySelector('#boton');

let  Personaje = () => {

let personaje = document.querySelector('#personaje').value;
let url = `https://swapi.dev/api/people/${personaje}`

//'https://swapi.dev/api/people/?search=${personaje}'

let nombre = document.querySelector('#nombre');
let genero = document.querySelector('#genero');

if(personaje==localStorage.name){
  //nombre.innerHTML = `${name}`
  
}else{

fetch(url , { method: 'GET'
}
)
  .then(response => response.json())
  .then(data => (nombre.innerHTML = data.name, localStorage.setItem('name', data.name)))
  .then(data => (localStorage.getItem('name')), console.log(localStorage.name))
  

  fetch(url, { method: 'GET'
}
)
  .then(response => response.json())
  .then(data => (genero.innerHTML = data.gender, localStorage.setItem('gender', data.gender)))
  .then(data => (localStorage.getItem('gender')), console.log(localStorage.gender))

}
}


boton.addEventListener('click',Personaje);
