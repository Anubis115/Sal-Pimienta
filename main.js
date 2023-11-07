// Obtén el botón por su ID
var miBoton = document.getElementById("miBoton");

// Define la función que se ejecutará cuando hagas clic en el botón
function mostrarAlerta() {
  alert("¡Gracias por tu mensaje! En breve nos pondremos en contacto");
}

// Asigna un evento de clic al botón y ejecuta la función mostrarAlerta
miBoton.addEventListener("click", mostrarAlerta);