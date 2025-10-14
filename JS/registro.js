
function validarEmail(email) {
  // Básico, puede mejorarse
  return /\S+@\S+\.\S+/.test(email);
}
const form = document.getElementById("registroForm");
form.addEventListener("submit", function(e){
  e.preventDefault();
  let valido = true;
  // Validación rápida
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const pass = document.getElementById("password");
  const conf = document.getElementById("confirm-password");
  if(nombre.value.trim() === ""){ nombre.classList.add("is-invalid"); valido=false; }
  else{ nombre.classList.remove("is-invalid"); nombre.classList.add("is-valid"); }
  if(!validarEmail(email.value)){ email.classList.add("is-invalid"); valido=false; }
  else { email.classList.remove("is-invalid"); email.classList.add("is-valid"); }
  if(pass.value.length < 6){ pass.classList.add("is-invalid"); valido=false; }
  else{ pass.classList.remove("is-invalid"); pass.classList.add("is-valid"); }
  if(conf.value !== pass.value || conf.value.length < 6){
    conf.classList.add("is-invalid");
    document.getElementById("msgConfirm").textContent = "Las contraseñas deben coincidir."
    valido = false;
  }
  else{ conf.classList.remove("is-invalid"); conf.classList.add("is-valid"); }
  if(valido){
    document.getElementById("registroOk").classList.remove("d-none");
    setTimeout(()=>{ window.location.href="index.html"; }, 1500);
  }
});
["nombre","email","password","confirm-password"].forEach(id=>{
  document.getElementById(id).addEventListener('input',e=>{
    e.target.classList.remove("is-invalid","is-valid");
    if(id==="confirm-password") document.getElementById("msgConfirm").textContent = "Las contraseñas deben coincidir.";
  });
});
