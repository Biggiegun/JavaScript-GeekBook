let boton = document.querySelector('#boton');

let  Personaje = () => {

let personaje = document.querySelector('#personaje').value;
let url = `https://swapi.dev/api/people/${personaje}/`


let nombre = document.querySelector('#nombre');
let genero = document.querySelector('#genero');

fetch(url, { method: 'GET'
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


// Al seleccionar la búsqueda realizada en la pestaña headers, método de consulta GET.

// El código de respuesta es 200 (satisfactorio), para todas las consultas exitosas. En este caso ocurre así. Se ubica en Network => Status.

// Hace referencia a tipos de navegadores; las versiones que pueden realizar este tipo de consultas.

// Un ejemplo de la respuesta del servidor por medio de un JSON,se encuentra en la pestaña Response y sería este:
// {"name":"Nute Gunray","height":"191","mass":"90","hair_color":"none","skin_color":"mottled green","eye_color":"red","birth_year":"unknown","gender":"male","homeworld":"http://swapi.dev/api/planets/18/","films":["http://swapi.dev/api/films/4/","http://swapi.dev/api/films/5/","http://swapi.dev/api/films/6/"],"species":["http://swapi.dev/api/species/11/"],"vehicles":[],"starships":[],"created":"2014-12-19T17:05:57.357000Z","edited":"2014-12-20T21:17:50.377000Z","url":"http://swapi.dev/api/people/33/"}
