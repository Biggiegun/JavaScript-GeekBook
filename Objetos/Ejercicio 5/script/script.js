
let boton = document.querySelector('.boton');

function Arrancar(event){
    console.dir(event);
}
boton.addEventListener('click', Arrancar);

// value: Especifica el valor de entrada de un elemento.
// nodeName: Propiedad usada para devolver el nombre de un nodo especifico a modo de string.
// required: atributo booleano. En caso de estar presente especifica que un "campo" debe necesariamente diligenciado antes de enviar el formulario al cuál pertenece.
