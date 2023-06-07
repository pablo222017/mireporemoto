function showAlert() { alert('¡Hola, esta es una alerta desde javascript!');}

document.querySelector(".button-menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive");
  });
  
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Evita el comportamiento de enlace predeterminado
  
      var href = link.getAttribute("href"); // Obtén el valor del atributo href del enlace
      if (href) {
        window.location.href = href; // Redirige al usuario a la página correspondiente
      }
    });
  });