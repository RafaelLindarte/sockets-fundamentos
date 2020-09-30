var socket = io();
socket.on("connect", function() {
    console.log(`conectado al servidor`);
})
socket.on("disconnect", function() {
        console.log(`perdimos conexión con el servidor`);
    })
    // cliente Envia Mensaje
socket.emit('enviarMensaje', {
    //usuario: 'rafael',
    message: 'hola mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});
// cliente Escucha Mensaje
socket.on('enviarMensaje', function(message) {
    console.log('Server', message);
});