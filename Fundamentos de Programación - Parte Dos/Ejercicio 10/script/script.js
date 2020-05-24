
 HorasVividas = (e) => {
    edad = document.querySelector('.edad').value; // Capturamos el valor de la caja de texto en la variable edad.
    horasVividas = edad*365*24; // Cálculo propio de la función.

    horas = document.querySelector('.horas'); //asignación de un espacio en el "document" a la variable horas.
    horas.innerHTML = horasVividas; //"impresión" de la variable "horasVividas" en el espacio asignado a "horas". 
};





document.getElementById('send').addEventListener('click', HorasVividas);
