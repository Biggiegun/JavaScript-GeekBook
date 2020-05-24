let type = false;
let ancho2 = 100;
let padding2 = 100;
let border1 = 0.5;



function Calculador(type, ancho2, padding2, border1){
    
if(type == true){
    
   return ("Border-box; "+ " ancho: "+ancho2+ " padding: "+padding2+ " borde: "+border1);

}else{

    return ("content-box; "+ "ancho: "+ancho2+ " padding: "+padding2+ " borde: "+border1);
}
    
    
}
let x = Calculador(type, ancho2, padding2, border1)
console.log(x);




