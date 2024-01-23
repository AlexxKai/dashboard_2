function mostrarCampos() {
    var tipoContacto = document.getElementById("tipoContacto").value;
    var campoCorreo = document.getElementById("campoCorreo");
    var campoID = document.getElementById("campoID");
    var campoArchivos = document.getElementById("campoArchivos");
    var campoComentarios = document.getElementById("campoComentarios");

    // Ocultar/mostrar campos según el tipo de contacto
    if (tipoContacto === "sugerencia") {
        campoCorreo.style.display = "block";
        campoID.style.display = "none";
        campoArchivos.style.display = "none";
        campoComentarios.style.display = "block";
    } else if (tipoContacto === "ayuda") {
        campoCorreo.style.display = "block";
        campoID.style.display = "none";
        campoArchivos.style.display = "none";
        campoComentarios.style.display = "block";
    } else if (tipoContacto === "reclamacion") {
        campoCorreo.style.display = "block";
        campoID.style.display = "block";
        campoArchivos.style.display = "block";
        campoComentarios.style.display = "block";
    }
}

function enviarFormulario() {
    // Lógica de envío o procesamiento del formulario

    // Mostrar el modal de confirmación
    $('#myModal').modal('show');
}

function restablecerFormulario() {
    // Restablecer visibilidad de campos
    document.getElementById("campoCorreo").style.display = "none";
    document.getElementById("campoComentarios").style.display = "none";
    document.getElementById("campoID").style.display = "none";
    document.getElementById("campoArchivos").style.display = "none";

    // Borrar contenido de campos
    document.getElementById("tipoContacto").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("comentarios").value = "";
    document.getElementById("idReclamacion").value = "";
    document.getElementById("formFileMultiple").value = "";

    // Restablecer el texto predeterminado del menú desplegable
    document.getElementById("tipoContacto").options[0].selected = true;
}

// Agregar evento click al fondo oscuro del modal
$('#myModal').on('click', function (e) {
    if (e.target !== this)
        return;

    // Lógica para cerrar y restablecer el formulario
    restablecerFormulario();
    $(this).modal('hide');
});