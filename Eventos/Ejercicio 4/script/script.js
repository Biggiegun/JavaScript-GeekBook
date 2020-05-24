const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';


function handleMovie(event){
    

    const movie =document.querySelector('.pelicula');
      movie.innerHTML = `<li class="movie1">${inception}</li>
                             <li class="movie2">${theButterFlyEffect}</li>
                             <li class="movie3">${eternalSunshineOfTheSM}</li>
                             <li class="movie4">${blueVelvet}</li>
                             <li class="movie5">${split}</li>`;
    
    function mostrarNombrePelicula(event){
        console.log(event.srcElement.innerText);
    }

     document.querySelector('.movie1').addEventListener('click',mostrarNombrePelicula);
     document.querySelector('.movie2').addEventListener('click',mostrarNombrePelicula);
     document.querySelector('.movie3').addEventListener('click',mostrarNombrePelicula);
     document.querySelector('.movie4').addEventListener('click',mostrarNombrePelicula);
     document.querySelector('.movie5').addEventListener('click',mostrarNombrePelicula);

}




document.querySelector('.boton').addEventListener('click', handleMovie);



