class Usuario {
     
    constructor(firstName, lastName, age){
        
        const job ='developer';

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.job = job;
    }
    
}    
let objeto = new Usuario();
    objeto.firstName = "Juan";
    objeto.lastName = "Pérez";
    objeto.age = 30;

    console.log(objeto.firstName);
    console.log(objeto.lastName);
    console.log(objeto.age);
    console.log(objeto.job);

    console.log("----------------------");
    
    objeto.firstName = "Jorge";
    console.log(objeto.firstName);
    objeto.age = objeto.age + 1;
    console.log(objeto.age);

    console.log("----------------------");

    console.log(objeto.firstName);
    console.log(objeto.lastName);
    console.log(objeto.age);
    console.log(objeto.job);
