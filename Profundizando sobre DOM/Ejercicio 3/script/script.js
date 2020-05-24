let Pintar = (e) =>{
let arreglo = [
                {
                 Nombre: "Juan",
                 Apellidos: "Pérez",
                 Telefono: "2222222"
                },
                
                {
                    Nombre: "Jorge",
                    Apellidos: "Lora",
                    Telefono: "3333333"
                   },
                   {
                    Nombre: "Ana",
                    Apellidos: "Roa",
                    Telefono: "1111111"
                   }
                ]

                console.log(arreglo[0].Nombre);
            console.log(arreglo[1].Nombre);
            console.log(arreglo[2].Nombre);

           let nombre1 = document.querySelector('#nombre1');
           let nombre2 = document.querySelector('#nombre2');
           



           if(nombre1.selected){

            let apellido1 = document.querySelector('#Apellidos');
            let telefono1 = document.querySelector('#Telefono');

            apellido1.value = arreglo[0].Apellidos;
            telefono1.value = arreglo[0].Telefono;

            }else if(nombre2.selected){

            let apellido2 = document.querySelector('#Apellidos');
            let telefono2 = document.querySelector('#Telefono');

            apellido2.value = arreglo[1].Apellidos;
            telefono2.value = arreglo[1].Telefono;
            }else{

            let apellido3 = document.querySelector('#Apellidos');
            let telefono3 = document.querySelector('#Telefono');

            apellido3.value = arreglo[2].Apellidos;
            telefono3.value = arreglo[2].Telefono;
            }


           
            event.preventDefault();

        }

        let boton =document.querySelector('button');
        boton.addEventListener('click', Pintar);
