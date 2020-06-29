//comando para establecer la conexión
var socket = io();

var label = $('#lblNuevoTicket');

//escuchar informacion
socket.on('connect', function() {

    console.log('conectado al servidor');

});

socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});

socket.on('estadoActual', function(resp) {

    label.text(resp.actual);

});

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);

    });


});