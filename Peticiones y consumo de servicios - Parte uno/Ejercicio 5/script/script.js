
let ActualizarPerro = () =>{
    let breeds =[];
    
 fetch('https://dog.ceo/api/breeds/list')
.then(list => list.json())  
.then(listRazas => {
    breeds = listRazas.message; 
    let breedsLength = breeds.length-1;
    return breeds, fetch('https://api.rand.fun/number/integer?max=' + breedsLength)  
})  

.then(function(response) { 
    return response.json();
}
).then(function (data) { 
    num =data.result; 
    let breedName = breeds[num]; 
    document.querySelector('#uno').innerHTML = `${breedName}`;
    return fetch('https://dog.ceo/api/breed/' + breedName + '/images/random')
})
.then(result=>result.json())
.then(image =>{
    const img = document.querySelector('img');
    img.src = image.message;
    img.alt = 'perro';
})
}
 


let boton =document.querySelector('#boton')
boton.addEventListener('click', ActualizarPerro);