
const intercambios = [
  {
    nombre: "Cafetera Manual",
    estado: "pendiente",
    imagen: "https://i.pinimg.com/1200x/1d/d0/93/1dd09381d594ec6ea73f1be544a5bcd9.jpg",
    detalles: "A la espera de confirmación del otro usuario.",
    otro: "Juan Martínez"
  },
  {
    nombre: "Patines Inline",
    estado: "proceso",
    imagen: "https://i.pinimg.com/736x/3b/a8/8d/3ba88db1f6eff053cba04735cf86d27b.jpg",
    detalles: "Coordinando la entrega con la otra persona.",
    otro: "Sofía Pérez"
  },
  {
    nombre: "Set de Cocina",
    estado: "completado",
    imagen: "https://i.pinimg.com/736x/7d/36/9f/7d369f1f5764973a57c1bf43658fb94f.jpg",
    detalles: "¡Intercambio exitoso realizado!",
    otro: "Pedro León"
  }
];

function estadoBadge(e) {
  if (e === "pendiente") return `<span class="badge badge-pendiente mb-2">Pendiente</span>`;
  if (e === "proceso") return `<span class="badge badge-proceso mb-2">En proceso</span>`;
  return `<span class="badge badge-completado mb-2">Completado</span>`;
}

function renderIntercambios() {
  const c = document.getElementById("listaIntercambios");
  c.innerHTML = "";
  intercambios.forEach((e,idx) => {
    let acciones = `
        <button class="btn btn-outline-primary btn-action me-1" onclick="verDetalles(${idx})">Ver detalles</button>
    `;
    if(e.estado === "pendiente") {
      acciones += `
        <button class="btn btn-outline-success btn-action me-1" onclick="confirmarAccion(${idx},'aceptar')">Aceptar</button>
        <button class="btn btn-outline-danger btn-action me-1" onclick="confirmarAccion(${idx},'rechazar')">Rechazar</button>
      `;
    }
    if(e.estado === "proceso") {
      acciones += `
        <button class="btn btn-outline-info btn-action me-1" onclick="enviarMsg(${idx})">Enviar mensaje</button>
      `;
    }
    c.innerHTML += `
      <div class="col-md-4">
        <div class="card card-intercambio" id="cardInt-${idx}">
          <img src="${e.imagen}" class="intercambio-img" alt="${e.nombre}">
          <div class="card-body">
            <h5 class="card-title">${e.nombre}</h5>
            ${estadoBadge(e.estado)}
            <p class="card-text">${e.detalles}</p>
            <small class="text-secondary">Con: ${e.otro}</small>
            <div class="d-flex mt-2">${acciones}</div>
          </div>
        </div>
      </div>
    `;
  });
}

// Detalles de intercambio
window.verDetalles = function(i) {
  const e = intercambios[i];
  const html = `
    <img src="${e.imagen}" alt="${e.nombre}" class="img-fluid rounded mb-3">
    <h6>${e.nombre}</h6>
    ${estadoBadge(e.estado)}
    <p>${e.detalles}</p>
    <div><strong>Intercambiado con:</strong> ${e.otro}</div>
  `;
  document.getElementById('detallesIntBody').innerHTML = html;
  new bootstrap.Modal(document.getElementById('modalDetallesInt')).show();
};

// Mensaje proceso
window.enviarMsg = function(i) {
  document.getElementById('mensajeIntercambio').value = '';
  document.getElementById('msgEnviado').classList.add('d-none');
  new bootstrap.Modal(document.getElementById('modalIntMsg')).show();
};

document.getElementById('msgForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('msgEnviado').classList.remove('d-none');
  setTimeout(()=>{
    bootstrap.Modal.getInstance(document.getElementById('modalIntMsg')).hide();
  },1100);
});

// Confirmar acción (aceptar/rechazar)
let accionIdx = null, accionTipo = null;
window.confirmarAccion = function(idx,tipo) {
  accionIdx = idx; accionTipo = tipo;
  document.getElementById('modalConfirmLabel').innerText = tipo=="aceptar"?"Aceptar intercambio":"Rechazar intercambio";
  document.getElementById('modalConfirmBody').innerText = tipo=="aceptar"
    ? "¿Confirmas que quieres aceptar este intercambio?"
    : "¿Estás seguro que deseas rechazar este intercambio?";
  new bootstrap.Modal(document.getElementById('modalConfirm')).show();
};
document.getElementById('confirmBtn').addEventListener('click',function(){
  if(accionIdx!==null){ 
    // animación al eliminar/rechazar
    const card = document.getElementById(`cardInt-${accionIdx}`);
    if(card) { 
      card.classList.add('fade-out');
      setTimeout(function(){
        if(accionTipo==="aceptar"){
          intercambios[accionIdx].estado = "proceso";
          intercambios[accionIdx].detalles = "Coordinando la entrega con la otra persona.";
        } else {
          intercambios.splice(accionIdx,1);
        }
        renderIntercambios();
        accionIdx = null; accionTipo=null;
        bootstrap.Modal.getInstance(document.getElementById('modalConfirm')).hide();
      },300);
    }
  }
});

// Render inicial
document.addEventListener("DOMContentLoaded",renderIntercambios);
