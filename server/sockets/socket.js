const { IO } = require('../server');

IO.on('connection', (client) => {
    console.log('Usuario conectado');
    //Server Envia Mensaje
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        message: 'Bienvenido a esta APP'
    })
    client.on('disconnect', () => {
            console.log('Usuario desconectado');
        })
        // Server Escucha al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', { data })
            // if (message.usuario) {
            //     callback({
            //         resp: 'TODO SALIO BIEN'
            //     });
            // } else {
            //     callback({
            //         resp: 'TODO SALIO MAL'
            //     })
            // }

    });
});