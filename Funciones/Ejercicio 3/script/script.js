let precio = 125;

function IVA(precio){
return precio*1.21;
}

let x = IVA(precio);

console.log("El precio con IVA es:");
console.log(`$ ${x}`);
