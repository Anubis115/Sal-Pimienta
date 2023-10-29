<?php
if(isset($_POST['enviar'])) {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $mensaje = $_POST['mensaje'];

    $destinatario = 'brian.lomas.115@gmail.com'; // Reemplaza con tu dirección de correo electrónico
    $asunto = 'Mensaje de contacto de ' . $nombre;

    $mensaje_correo = "Nombre: $nombre\n";
    $mensaje_correo .= "Correo Electrónico: $correo\n";
    $mensaje_correo .= "Mensaje:\n$mensaje";

    $encabezados = 'From: ' . $correo . "\r\n" .
        'Reply-To: ' . $correo . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($destinatario, $asunto, $mensaje_correo, $encabezados);

    // Redirige al usuario después de enviar el mensaje
   header('Location: gracias.html');
}
?>