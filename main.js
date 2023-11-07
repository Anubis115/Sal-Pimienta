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
  let nombre = document.getElementById("nombreIngresado").value;
  let apellido = document.getElementById("apellidoIngresado").value;
  let telefono = document.getElementById("telefonoIngresado").value;


  document.getElementById("nombre").innerHTML = nombre;
  document.getElementById("apellido").innerHTML = apellido;
  document.getElementById("telefono").innerHTML = telefono;
}