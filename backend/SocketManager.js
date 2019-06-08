module.exports = (io) => {
    io.on('connection', function (socket) {
        console.log('a user connected');
        socket.on('chat message', (message) => {
            io.emit('chat message', message);
        });
    });
}