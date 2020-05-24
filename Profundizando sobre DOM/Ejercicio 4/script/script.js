FuncionP = ()  =>{
    var element = document.querySelector("p");
    let parrafo =document.querySelector('#info');

    const newContent =document.createTextNode(`${element.offsetHeight} px`);
    parrafo.appendChild(newContent);

  

  }

  let boton = document.querySelector('#button1');
  boton.addEventListener('click', FuncionP);


 Funcion = () => {
    const p = document.querySelector('#parrafoPrueba');
    p.style = 'font-size: 12px;';
  }

  let boton2 = document.querySelector('#button2');
  boton2.addEventListener('click', Funcion);