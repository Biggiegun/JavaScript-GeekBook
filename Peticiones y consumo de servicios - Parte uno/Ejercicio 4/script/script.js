

let ActualizarEstado = () =>{

let texto = document.querySelector("#texto").value;
let url = `https://api.github.com/orgs/${texto}`
let img = document.querySelector('img');
let organizacion = document.querySelector('#organizacion');
let location = document.querySelector('#location');
let repos = document.querySelector('#repos');

fetch(url)  
.then(response => response.json())  
.then(data => {organizacion.innerHTML=data.name ,img.src= data.avatar_url ,location.innerHTML = data.location; return fetch("https://api.github.com/orgs/agileinnova/repos")})
.then(repos_url => repos_url.json())
.then(data =>{
    console.log(data);
    repos.innerHTML= `<li>${data[0].name}</li>
    <li>${data[1].name}</li>
    <li>${data[2].name}</li>
    <li>${data[3].name}</li>
    <li>${data[4].name}</li>
    <li>${data[5].name}</li>
    <li>${data[6].name}</li>
    <li>${data[7].name}</li>
    <li>${data[8].name}</li>
    <li>${data[9].name}</li>
    <li>${data[10].name}</li>
    <li>${data[11].name}</li>
    <li>${data[12].name}</li>
    <li>${data[13].name}</li>
    <li>${data[14].name}</li>
    <li>${data[15].name}</li>
    <li>${data[16].name}</li>
    <li>${data[17].name}</li>
    <li>${data[18].name}</li>
    <li>${data[19].name}</li>
    <li>${data[20].name}</li>`       
    
});


}

let boton = document.querySelector('#boton')
boton.addEventListener('click', ActualizarEstado);


