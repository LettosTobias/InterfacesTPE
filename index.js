// Obtén el encabezado y la imagen
var header = document.getElementById("main-header");
var logo = document.getElementById("logo");

// Función para manejar el evento de desplazamiento
window.onscroll = function () {
  // Obtén la posición de desplazamiento actual
  var scrollPos = window.scrollY;

  // Cambia el tamaño de la imagen y el color de fondo del encabezado al hacer scroll
  if (scrollPos > 100) {
    header.style.position = "fixed";
    header.style.backgroundColor = "#5499F8"; // Cambia el color de fondo a rojo
    header.style.padding = "10px"; // Ajusta el padding si es necesario
    logo.style.margin = "0px";
    logo.style.maxWidth = "100px"; // Cambia el tamaño de la imagen
  } else {
    logo.style.margin = "0px"; // Restaura el color de fondo original
    header.style.background =
      "linear-gradient(180deg, #5499F8 0%, #5499F8 87.91%, rgba(84, 153, 248, 0.00) 100%)";
    logo.style.maxWidth = "100%"; // Restaura el tamaño de la imagen original
  }
};
