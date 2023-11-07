// Obtén el botón por su ID
var miBoton = document.getElementById("miBoton");

// Asigna un evento de clic al botón y ejecuta la función mostrarAlerta
miBoton.addEventListener("click", function() {
  // Obtén los campos del formulario por sus IDs
  var nameField = document.getElementById("name");
  var lastNameField = document.getElementById("last_name");
  var phoneField = document.getElementById("phone");
  var emailField = document.getElementById("email");

  // Verifica si los campos requeridos están vacíos
  if (
    nameField.value === "" ||
    lastNameField.value === "" ||
    phoneField.value === "" ||
    emailField.value === ""
  ) {
    alert("Por favor, rellena todos los campos del formulario antes de continuar.");
  } else {
    alert("¡Gracias por tu mensaje! En breve nos pondremos en contacto");
  }
});
function guardar(){
  let hora = document.getElementById("horaIngresado").value;
  let direccion = document.getElementById("direccionIngresado").value;
  let zona = document.getElementById("zonaIngresado").value;


  document.getElementById("hora").innerHTML = hora;
  document.getElementById("direccion").innerHTML = direccion;
  document.getElementById("zona").innerHTML = zona;
}