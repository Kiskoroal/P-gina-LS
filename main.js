var boton = document.getElementById('btn-agregar');
btnCerrar = document.getElementById('btn-cerrar');

function agregarCliente(){
    var modal = document.getElementById('modal');
    modal.setAttribute('class', "modale opened");
}

boton.addEventListener('click', agregarCliente);

function cerrarModal(){
    modal = document.getElementById('modal-cita');
    modal.setAttribute('class', 'modale');
}

function agregarCita(){
    var modal = document.getElementById('modal-cita');
    modal.setAttribute('class', "modale opened");
}

document.getElementById('btnCita').addEventListener('click', agregarCita);

function cerrarModal(){
    modal = document.getElementById('modal');
    modal.setAttribute('class', 'modale');
}