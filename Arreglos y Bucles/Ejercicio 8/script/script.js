const tasks = [
    {name: 'Recoger setas en el campo', completed: true},
    {name: 'Comprar pilas', completed: true},
    {name: 'Poner una lavadora de blancos', completed: true},
    {name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false}
  ];

 

  let tarea1 = document.querySelector('#tarea1');
  let tarea2 = document.querySelector('#tarea2');
  let tarea3 = document.querySelector('#tarea3');
  let tarea4 = document.querySelector('#tarea4');

  let check1 = document.querySelector('#task1');
  let check2 = document.querySelector('#task2');
  let check3 = document.querySelector('#task3');
  let check4 = document.querySelector('#task4');


  

  let ActualizarEstado1= (e) =>{

    tarea1.innerHTML = `<strike>${tasks[0].name}</strike>`
    tasks[0].completed = false;
}
check1.addEventListener('change', ActualizarEstado1);


let ActualizarEstado2= (e) =>{

    tarea2.innerHTML = `<strike>${tasks[1].name}</strike>`
    tasks[1].completed = false;

}
check2.addEventListener('change', ActualizarEstado2);


let ActualizarEstado3= (e) =>{

    tarea3.innerHTML = `<strike>${tasks[2].name}</strike>`
    tasks[2].completed = false;

}
check3.addEventListener('change', ActualizarEstado3);


let ActualizarEstado4 = (e) =>{

    tarea4.innerHTML = `<strike>${tasks[3].name}</strike>`
    tasks[3].completed = true;

}
check4.addEventListener('change', ActualizarEstado4);




  