let images = [];

fetch('imagenes.json')
  .then(response => response.json())
  .then(data => {
    images = data.images;
    updateImage();
  })
  .catch(error => console.error('Error fetching images:', error));
// Cargar imágenes desde el archivo JSON
fetch('imagenes.json')
  .then(response => response.json())
  .then(images => {
    const gallery = document.getElementById('gallery');
    images.forEach(image => {
      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.alt;
      gallery.appendChild(img);

      // Evento para agrandar la imagen
      img.addEventListener('click', () => {
        const fullscreen = document.getElementById('fullscreen');
        const fullscreenImg = document.getElementById('fullscreenImg');
        fullscreenImg.src = image.src;
        fullscreen.style.display = 'flex';
      });
    });
  });

// Cerrar la imagen en modo pantalla completa
document.getElementById('fullscreen').addEventListener('click', () => {
  document.getElementById('fullscreen').style.display = 'none';
});

