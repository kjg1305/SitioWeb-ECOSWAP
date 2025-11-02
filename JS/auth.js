// auth.js
function verificarSesion() {
  const sesion = JSON.parse(localStorage.getItem('userSession'));
  if (!sesion || !sesion.autenticado) {
    mostrarMensajeSesion('Debes iniciar sesión para acceder a esta sección');
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1500);
    return false;
  }
  return true;
}

function mostrarMensajeSesion(mensaje) {
  let msgDiv = document.getElementById('mensajeSesion');
  if (!msgDiv) {
    msgDiv = document.createElement('div');
    msgDiv.id = 'mensajeSesion';
    msgDiv.className = 'alert alert-success text-center mt-5 shadow';
    msgDiv.style = 'max-width: 400px; margin: 40px auto; font-size: 1.2em;';
    document.body.prepend(msgDiv);
  }
  msgDiv.innerHTML = `
    <i class="bi bi-check-circle-fill me-2"></i>
    ${mensaje}
    <br>
    <a href="login.html" class="btn btn-success btn-sm mt-3">Iniciar sesión</a>
  `;
}



function cerrarSesion() {
  localStorage.removeItem('userSession');
  window.location.href = 'index.html';
}

// La función global visible para el fetch:
window.authInit = function() {
  const sesion = JSON.parse(localStorage.getItem('userSession'));
  const cerrarSesionItem = document.getElementById('cerrarSesionItem');
  const iniciarSesionItem = document.getElementById('iniciarSesionItem');
  const registroItem = document.getElementById('registroItem');
  const usuarioNavbar = document.getElementById('usuarioNavbar');

  if (!(cerrarSesionItem && iniciarSesionItem && registroItem && usuarioNavbar)) {
    console.warn('Uno o más elementos del navbar no existen todavía');
    return;
  }

  if (sesion && sesion.autenticado) {
    cerrarSesionItem.style.display = '';
    iniciarSesionItem.style.display = 'none';
    registroItem.style.display = 'none';
    let nombre = sesion.usuario || (sesion.email ? sesion.email.split('@')[0] : '');
    usuarioNavbar.textContent = nombre ? '¡Hola, ' + nombre + '!' : '¡Hola!';
  } else {
    cerrarSesionItem.style.display = 'none';
    iniciarSesionItem.style.display = '';
    registroItem.style.display = '';
    usuarioNavbar.textContent = '';
  }
}


