

   const cont = {valorInicial:0, 
    valorMinimo:0, 
    valorMaximo:10, 
    valorActual:5};
   
    AumentarValor = () =>{
    
    
   if(cont.valorActual < cont.valorMaximo){
       cont.valorActual+=1;
    console.log(cont.valorActual);

   }
        
   
}

 DisminuirValor = () =>{
    
    
    if(cont.valorActual > cont.valorMinimo){
        cont.valorActual-=1;
     console.log(cont.valorActual);
 
    }
         
    
 }

 ReestablecerValor = () =>{
    
cont.valorActual==cont.valorInicial;      
   
}
 
    boton = document.querySelector('#boton');
    boton1 = document.querySelector('#boton1');
    boton2 = document.querySelector('#boton2');



boton.addEventListener('click',AumentarValor);
boton1.addEventListener('click',DisminuirValor);
boton2.addEventListener('click',DisminuirValor);





















