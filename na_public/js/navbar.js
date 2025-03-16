    // Función para activar el enlace correspondiente según la URL
    function setActiveLink() {
      const currentUrl = window.location.pathname; // Obtiene la ruta actual
      const links = document.querySelectorAll('.cabecera-link'); // Selecciona todos los enlaces

      links.forEach(link => {
        if (link.getAttribute('href') === currentUrl) {
          link.classList.add('active'); // Agrega la clase 'active' al enlace correspondiente
        } else {
          link.classList.remove('active'); // Remueve la clase 'active' de los demás enlaces
        }
      });
    }

    // Función para alternar el menú en dispositivos móviles
    function toggleMenu() {
      const navbarMenus = document.getElementById('navbarMenus');
      const hamburger = document.querySelector('.hamburger');
      navbarMenus.classList.toggle('active');
      hamburger.classList.toggle('active');
    }

    // Ejecuta la función al cargar la página
    document.addEventListener('DOMContentLoaded', setActiveLink);