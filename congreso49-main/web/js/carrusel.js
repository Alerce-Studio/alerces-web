/*  PASAR FOTOS AUTOMATICAMENTE   */ 
const imagenes = document.querySelectorAll('.galeria-nosotros img');
let indice = 0;

function mostrarImagen() {
  imagenes.forEach(function(img, i) {
    img.classList.remove('activa');
  });
  imagenes[indice].classList.add('activa');
  indice = (indice + 1) % imagenes.length;
}

// Mostramos la primera imagen al cargar
mostrarImagen();

// Cambia automáticamente cada 3 segundos
setInterval(mostrarImagen, 5000);