<?php
// Habilitar la visualización de errores para depuración
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Verifica si se ha enviado el formulario usando el método POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener y sanitizar los datos del formulario
    $nombre = htmlspecialchars($_POST['nombre']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $email = htmlspecialchars($_POST['email']);
    $tema = htmlspecialchars($_POST['tema']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    // Configura los parámetros del correo
    $destinatario = "raulon@gmail.com";
    $asunto = "Nuevo mensaje de $nombre sobre $tema";
    $cuerpo = "Nombre: $nombre\nNúmero Telefónico: $telefono\nCorreo Electrónico: $email\nTema: $tema\nMensaje:\n$mensaje\n";
    $encabezados = "From: $email\r\nReply-To: $email\\n";

    // Enviar el correo
    if (mail($destinatario, $asunto, $cuerpo, $encabezados)) {
        echo "Correo enviado exitosamente.";
    } else {
        echo "Hubo un error al enviar el correo.";
    }
} else {
    echo "No se recibieron datos del formulario.";
}
?>
