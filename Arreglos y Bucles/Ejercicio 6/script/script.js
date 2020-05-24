var boton = document.querySelector("#enviar");

let movieMethod = () => {
  var movie1 = document.querySelector("#pelicula1").value;
  var movie2 = document.querySelector("#pelicula2").value;

  let arregloMovie = [movie1, movie2];

  // bucle for...of
  for (const movie of arregloMovie) {
    console.log(`¡A mí también me encantó ${movie}! Tenemos mucho en común, humana.`);
    event.preventDefault();
}
};
boton.addEventListener("click", movieMethod);
