// Validación básica de email
function validarEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(e){
  e.preventDefault();
  let valido = true;
  const email = document.getElementById("email");
  const pass = document.getElementById("password");

  // Validación
  if(!validarEmail(email.value)){
    email.classList.add("is-invalid"); valido = false;
  } else { email.classList.remove("is-invalid"); email.classList.add("is-valid"); }
  if(pass.value.length < 6){
    pass.classList.add("is-invalid"); valido=false;
  } else { pass.classList.remove("is-invalid"); pass.classList.add("is-valid"); }

  // Si todo correcto, simula login y guarda en localStorage
  if(valido){
    // Recupera el usuario (nombre) si existe desde un registro previo
    const registroPrevio = JSON.parse(localStorage.getItem('userSession'));
    localStorage.setItem("userSession", JSON.stringify({
      usuario: registroPrevio && registroPrevio.usuario ? registroPrevio.usuario : "",
      email: email.value,
      autenticado: true
    }));
    document.getElementById("loginOk").classList.remove("d-none");
    setTimeout(()=>{ window.location.href="index.html"; }, 1000);
  }
});

// Limpia estilos al escribir
["email","password"].forEach(id=>{
  document.getElementById(id).addEventListener('input',e=>{
    e.target.classList.remove("is-invalid","is-valid");
  });
});

// Animación mostrar/ocultar contraseña
const togglePass = document.getElementById("togglePass");
togglePass.addEventListener("click",function(){
  const pass = document.getElementById("password");
  const icon = togglePass.querySelector("i");
  if(pass.type === "password"){
    pass.type = "text";
    icon.classList.remove("bi-eye-fill");
    icon.classList.add("bi-eye-slash-fill");
  }else{
    pass.type = "password";
    icon.classList.remove("bi-eye-slash-fill");
    icon.classList.add("bi-eye-fill");
  }
});

