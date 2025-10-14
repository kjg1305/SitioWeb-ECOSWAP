
    function validarEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
      }
    const form = document.getElementById("contactoForm");
    form.addEventListener("submit", function(e){
      e.preventDefault();
      let valido = true;
      const nombre = document.getElementById("nombre");
      const email = document.getElementById("email");
      const msj = document.getElementById("mensaje");
      if(nombre.value.trim() === ""){ nombre.classList.add("is-invalid"); valido=false; }
      else{ nombre.classList.remove("is-invalid"); nombre.classList.add("is-valid"); }
      if(!validarEmail(email.value)){ email.classList.add("is-invalid"); valido=false; }
      else { email.classList.remove("is-invalid"); email.classList.add("is-valid"); }
      if(msj.value.trim() === ""){ msj.classList.add("is-invalid"); valido=false; }
      else{ msj.classList.remove("is-invalid"); msj.classList.add("is-valid"); }
      if(valido){
        document.getElementById("msgEnviado").classList.remove("d-none");
        form.reset();
        ["nombre","email","mensaje"].forEach(id=>document.getElementById(id).classList.remove("is-valid"));
      }
    });
    ["nombre","email","mensaje"].forEach(id=>{
      document.getElementById(id).addEventListener('input',e=>{
        e.target.classList.remove("is-invalid","is-valid");
      });
    });
  