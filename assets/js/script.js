const imagenesConZoom = document.querySelectorAll('.clsph img');

imagenesConZoom.forEach(imagen => {
  imagen.addEventListener('mouseover', () => {
    imagen.style.transform = 'scale(1.2)'; // Cambia el factor de escala aquí
  });

  imagen.addEventListener('mouseout', () => {
    imagen.style.transform = 'scale(1)'; // Regresa al tamaño original
  });
});