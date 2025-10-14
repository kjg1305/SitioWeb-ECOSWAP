
function validarEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(e){
  e.preventDefault();
  let valido = true;
  const email = document.getElementById("email");
  const pass = document.getElementById("password");

  if(!validarEmail(email.value)){
    email.classList.add("is-invalid"); valido = false;
  } else { email.classList.remove("is-invalid"); email.classList.add("is-valid"); }
  if(pass.value.length < 6){
    pass.classList.add("is-invalid"); valido=false;
  } else { pass.classList.remove("is-invalid"); pass.classList.add("is-valid"); }
  if(valido){
    document.getElementById("loginOk").classList.remove("d-none");
    setTimeout(()=>{ window.location.href="index.html"; }, 1000);
  }
});

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
