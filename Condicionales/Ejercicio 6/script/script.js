// Operador Ternario

const activableSection = document.querySelector('div');

activableSection = (activableSection.classList.contains('warning'))?
'activableSection.innerHTML= `<div>AVISO</div> <p>Tenga cuidado</p>`':
activableSection = (activableSection.classList.contains('error'))?
'activableSection.innerHTML= `<div>ERROR</div> <p>Ha surgido un error</p>`':
'activableSection.innerHTML= `<div>CORRECTO</div> <p>Los datos son correctos</p>`';
