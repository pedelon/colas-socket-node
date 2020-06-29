var socket = io();

var lblTiket1 = $('#lblTicket1');
var lblTiket2 = $('#lblTicket2');
var lblTiket3 = $('#lblTicket3');
var lblTiket4 = $('#lblTicket4');

var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');

var lblTikets = [lblTiket1, lblTiket2, lblTiket3, lblTiket4];
var lblEscritorios = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4];

socket.on('estadoActual', function(data) {
    // console.log(data);
    actualizaHTML(data.ultimos4);
});
socket.on('ultimos4', async function(data) {
    // console.log(data);

    actualizaHTML(data.ultimos4);

    const audio = new Audio('audio/new-ticket.mp3');
    await audio.play();

});

function actualizaHTML(ultimos4) {

    for (let i = 0; i < ultimos4.length; i++) {

        lblTikets[i].text('Ticket ' + ultimos4[i].numero);
        lblEscritorios[i].text('Escritorio ' + ultimos4[i].escritorio);

    }

}



//escuchar informacion
// socket.on('connect', function() {

//     console.log('conectado al servidor');

// });

// socket.on('disconnect', function() {

//     console.log('Perdimos conexión con el servidor');

// });