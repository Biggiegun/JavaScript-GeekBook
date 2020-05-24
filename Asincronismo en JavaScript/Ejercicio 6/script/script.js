const SesionOff = () => {
  const sesion = document.querySelector('.sesion');
  sesion.innerHTML = 'Expired Sesion';
  alert('su sesión ha expirado');
}

setTimeout(SesionOff, 15000);