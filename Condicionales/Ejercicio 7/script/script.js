// Días por año 365.25

const presentYear = 2021;


if(presentYear % 4 == 0){
console.log("El año "+presentYear+" es bisiesto");
}
else if((presentYear+1) % 4 == 0){
console.log("El siguiente año bisiesto es el "+(presentYear+1));
}
else if((presentYear+2) % 4 == 0){
console.log("El siguiente año bisiesto es el "+(presentYear+2));
}
else if((presentYear+3) % 4 == 0){
    console.log("El siguiente año bisiesto es el "+(presentYear+3));
}
