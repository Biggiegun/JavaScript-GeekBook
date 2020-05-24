
class Mujer{

constructor(nombre, edad, profesion){
    this.nombre=nombre;
    this.edad=edad;
    this.profesion=profesion;
}


}

geekGirl1 = new Mujer();
geekGirl1.nombre = "Susana";
geekGirl1.edad = "34 años";
geekGirl1.profesion = "Periodista";

/*geekGirl2 = new Mujer();
geekGirl2.nombre = "Rocio";
geekGirl2.edad = "25 años";
geekGirl2.profesion = "actriz";*/


var p = document.querySelector('p');
p.innerHTML = `Mi nombre es ${geekGirl1.nombre}, tengo ${geekGirl1.edad}, y soy ${geekGirl1.profesion}.`

geekGirl1.accion = (run) => `Y estoy ${run}`; // Forma de enlazar un método a un objeto en JS.
console.log(geekGirl1.accion('corriendo'));

geekGirl1.runAMarathon = (distance) =>
    `un maratón de ${distance} Km`;
console.log(geekGirl1.runAMarathon(50));


