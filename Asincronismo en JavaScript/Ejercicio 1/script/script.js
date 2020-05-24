

setTimeout(funA = (e) => {
    console.log('hola')
    
}, 10000);



funB = (callback) =>{
    
    callback();
}


funB(funA);

////////////////////////////////////////////////////////////////////////

if("Hello"==="hello"){
console.log('Lo son');
}else {
    console.log('No lo son');
}

////////////////////////////////////////////////////////////////////////

Pulsado = () =>{
    let palabra = "pulsado";
    console.log(palabra);
}

let boton = document.querySelector("#boton");
boton.addEventListener('click',Pulsado);

console.log("empezamos");