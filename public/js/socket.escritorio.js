var socket = io();

var searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');

$('h1').text('Escritorio ' + escritorio);

//escuchar informacion
socket.on('connect', function() {

    console.log('conectado al servidor');

});

socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});

$('button').on('click', function() {

    socket.emit('atenderTicket', { escritorio: escritorio }, function(ticket) {

        console.log(ticket);

        if (!ticket.numero) {
            $('small').text(ticket);
            alert(ticket)
        } else {
            $('small').text('Ticket ' + ticket.numero);
        }


    });


});