
const datosMatches = [
  {
    titulo: 'Cámara Vintage Polaroid',
    descripcion: 'Cámara instantánea en excelente estado. Incluye repuestos y funda original.',
    duenio: 'María García',
    calificacion: '4.8 ★',
    porcentaje: '95% match',
    foto: 'https://i.pinimg.com/736x/72/08/57/72085752d8e9a19e120393f15c6dca23.jpg'
  },
  {
    titulo: 'Colección de Libros',
    descripcion: 'Novelas de ciencia ficción clásicas, autores destacados.',
    duenio: 'Ana López',
    calificacion: '4.9 ★',
    porcentaje: '92% match',
    foto: 'https://i.pinimg.com/1200x/c6/a7/41/c6a741478a779a919a50be9f69300a69.jpg'
  },
  {
    titulo: 'Bicicleta de Montaña',
    descripcion: 'Ideal para aventuras al aire libre, poco uso.',
    duenio: 'Carlos Ruiz',
    calificacion: '4.6 ★',
    porcentaje: '87% match',
    foto: 'https://i.pinimg.com/736x/61/e7/57/61e7573adc55f1b335e7c6eba3e930f9.jpg'
  },
  {
    titulo: 'Mochila de Viaje',
    descripcion: 'Perfecta para excursiones y aventuras',
    duenio: 'Diego Fernández',
    calificacion: '4.4 ★',
    porcentaje: '85% match',
    foto: 'https://i.pinimg.com/736x/ae/8a/df/ae8adf457d4ace795daa98c48d603bc8.jpg'
  },
  {
    titulo: 'Plantas de Interior',
    descripcion: 'Decoración natural para el hogar',
    duenio: 'Pedro Silva',
    calificacion: '4.7 ★',
    porcentaje: '83% match',
    foto: 'https://i.pinimg.com/1200x/18/a5/e0/18a5e06a27fcf5b4723b8b51ae510551.jpg'
  },
  {
    titulo: 'Utensilios de Cocina',
    descripcion: 'Set completo de herramientas culinarias',
    duenio: 'Sofía Martín',
    calificacion: '4.5 ★',
    porcentaje: '78% match',
    foto: 'https://i.pinimg.com/736x/5e/42/85/5e4285bf84865aff28203cc9eb485f67.jpg'
  }
];

function renderMatches() {
  const c = document.getElementById("matchList");
  c.innerHTML = "";
  datosMatches.forEach((obj, idx) => {
    c.innerHTML += `
      <div class="col-md-4">
        <div class="match-card card" id="match-${idx}">
          <div class="percent-tag">${obj.porcentaje}</div>
          <img src="${obj.foto}" alt="${obj.titulo}" class="match-img">
          <div class="card-body">
            <h5 class="card-title">${obj.titulo}</h5>
            <p class="card-text mb-1">${obj.descripcion}</p>
            <div>
              <span class="owner">${obj.duenio}</span>
              <span class="rating">${obj.calificacion}</span>
            </div>
            <div class="mt-3 d-flex gap-2">
              <button class="btn btn-outline-primary btn-sm flex-fill btn-action" onclick="verDetalles(${idx})">Ver detalles</button>
              <button class="btn btn-outline-success btn-sm flex-fill btn-action" onclick="contactar(${idx})">Contactar</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

// Detalles del objeto
window.verDetalles = function(i) {
  const obj = datosMatches[i];
  document.getElementById('detallesBody').innerHTML = `
    <img src="${obj.foto}" alt="${obj.titulo}" class="img-fluid rounded mb-3">
    <h6>${obj.titulo} (${obj.porcentaje})</h6>
    <p>${obj.descripcion}</p>
    <div><strong>Propietario:</strong> ${obj.duenio}<br>
    <strong>Calificación:</strong> ${obj.calificacion}</div>
  `;
  new bootstrap.Modal(document.getElementById('modalDetalles')).show();
};

// Modal contactar
window.contactar = function(i) {
  document.getElementById('mensajeContacto').value = "";
  document.getElementById('mensajeEnviado').classList.add('d-none');
  new bootstrap.Modal(document.getElementById('modalContactar')).show();
};

// Form enviar mensaje
document.getElementById('contactarForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('mensajeEnviado').classList.remove('d-none');
  setTimeout(()=>{
    bootstrap.Modal.getInstance(document.getElementById('modalContactar')).hide();
  },1100);
});

document.addEventListener('DOMContentLoaded',renderMatches);
 