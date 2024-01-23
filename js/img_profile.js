document.addEventListener('DOMContentLoaded', function () {
    var dropdownBtn = document.getElementById('dropdownBtn');
    var dropdownContent = document.querySelector('.dropdown-content');
  
    // Función para mostrar u ocultar el menú desplegable
    function toggleDropdown() {
      if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
      } else {
        dropdownContent.style.display = 'block';
      }
    }
  
    // Evento de clic en el botón
    dropdownBtn.addEventListener('click', function () {
      toggleDropdown();
    });
  
    // Evento de clic en la imagen dentro del botón
    dropdownBtn.querySelector('img').addEventListener('click', function (event) {
      // Evitar que el clic en la imagen propague al contenedor del botón
      event.stopPropagation();
      toggleDropdown();
    });
  
    // Cerrar el menú desplegable si se hace clic fuera de él
    window.addEventListener('click', function (event) {
      if (!event.target.matches('#dropdownBtn') && dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
      }
    });
  });