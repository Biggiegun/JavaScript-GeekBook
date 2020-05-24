const activableSection = document.querySelector('div');

// Si contiene la clase hidden
if (activableSection.classList.contains('warning')) {
    activableSection.innerHTML= `<div>AVISO</div> <p>Tenga cuidado</p>`;
}
 else if(activableSection.classList.contains('error')){ 
    activableSection.innerHTML= `<div>ERROR</div> <p>Ha surgido un error</p>`;
} else if (activableSection.classList.contains('success')){ 
    activableSection.innerHTML= `<div>CORRECTO</div> <p>Los datos son correctos</p>`;
;
}