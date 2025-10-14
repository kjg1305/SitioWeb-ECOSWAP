
let objetos = [
  {
    nombre: "Bicicleta Urbana",
    descripcion: "En perfecto estado, ideal para la ciudad. Poco uso.",
    imagen: "https://i.pinimg.com/1200x/b3/18/5f/b3185fcd2c3174a62c63b128e4f9992b.jpg"
  },
  {
    nombre: "Colección de Libros",
    descripcion: "Varios títulos para intercambio, excelente estado.",
    imagen: "https://i.pinimg.com/1200x/8e/d9/30/8ed93054d792c4e0e5037925165a608e.jpg"
  },
  {
    nombre: "Ropa Deportiva",
    descripcion: "Playeras y shorts talla M, poco uso.",
    imagen: "https://i.pinimg.com/736x/8f/ac/16/8fac1659653c963ac087bff80319bf7f.jpg"
  }
];

let editando = null;

// Render cards en la página
function renderObjetos() {
  const contenedor = document.getElementById('listaObjetos');
  contenedor.innerHTML = "";
  objetos.forEach((obj, idx) => {
    contenedor.innerHTML += `
      <div class="col-md-4">
        <div class="card card-producto" id="card-${idx}">
          <img src="${obj.imagen}" class="producto-img" alt="${obj.nombre}">
          <div class="card-body">
            <h5 class="card-title">${obj.nombre}</h5>
            <p class="card-text">${obj.descripcion}</p>
            <div class="d-flex">
              <button class="btn btn-outline-success btn-action" onclick="abrirModalEditar(${idx})">Editar</button>
              <button class="btn btn-outline-danger btn-action" onclick="abrirModalEliminar(${idx})">Eliminar</button>
            </div>
          </div>
        </div>
      </div>`;
  });
}

// Crear nuevo objeto
document.querySelector('.btn-nuevo').addEventListener('click', () => {
  editando = null;
  document.getElementById('modalObjetoLabel').innerText = "Crear nuevo objeto";
  document.getElementById('objetoForm').reset();
  new bootstrap.Modal(document.getElementById('modalObjeto')).show();
});

// Editar objeto
window.abrirModalEditar = function(i) {
  editando = i;
  document.getElementById('modalObjetoLabel').innerText = "Editar objeto";
  document.getElementById('nombreObjeto').value = objetos[i].nombre;
  document.getElementById('descripcionObjeto').value = objetos[i].descripcion;
  document.getElementById('imagenObjeto').value = objetos[i].imagen;
  new bootstrap.Modal(document.getElementById('modalObjeto')).show();
};

// Guardar (crear o actualizar)
document.getElementById('objetoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const obj = {
    nombre: document.getElementById('nombreObjeto').value,
    descripcion: document.getElementById('descripcionObjeto').value,
    imagen: document.getElementById('imagenObjeto').value
  };
  if (editando === null) {
    objetos.push(obj);
  } else {
    objetos[editando] = obj;
  }
  bootstrap.Modal.getInstance(document.getElementById('modalObjeto')).hide();
  renderObjetos();
});

// Eliminar objeto con animación fade
let eliminarIdx = null;
window.abrirModalEliminar = function(i) {
  eliminarIdx = i;
  new bootstrap.Modal(document.getElementById('modalEliminar')).show();
};

document.getElementById('confirmarEliminarBtn').addEventListener('click', function() {
  if (eliminarIdx !== null) {
    // Encuentra la card, agrega efecto de fade
    const card = document.getElementById(`card-${eliminarIdx}`);
    if(card) {
      card.classList.add('fade-out');
      setTimeout(function(){
        objetos.splice(eliminarIdx, 1);
        renderObjetos();
        eliminarIdx = null;
        bootstrap.Modal.getInstance(document.getElementById('modalEliminar')).hide();
      }, 300);
    }
  }
});

// Para renderizar los objetos al cargar
document.addEventListener('DOMContentLoaded', renderObjetos);
