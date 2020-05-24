let boton = document.querySelector('#boton');

let  Personaje = () => {

let personaje = document.querySelector('#personaje').value;
let url = `https://swapi.dev/api/people/${personaje}`

//'https://swapi.dev/api/people/?search=${personaje}'

let nombre = document.querySelector('#nombre');
let genero = document.querySelector('#genero');

fetch(url , { method: 'GET'
}
)
  .then(response => response.json())
  .then(data => nombre.innerHTML = data.name)
  

  fetch(url, { method: 'GET'
}
)
  .then(response => response.json())
  .then(data => genero.innerHTML = data.gender)

}


boton.addEventListener('click',Personaje);
