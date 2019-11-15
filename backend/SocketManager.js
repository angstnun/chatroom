module.exports = (io) => {
    io.on('connection', function (socket) {
        console.log('a user connected');
        socket.on('chat message', (message) => {
            io.emit('chat message', message);
        });

        socket.on('disconnect', (reason) => {
            console.log(`user logged out: ${socket.id}; reason: ${reason}`);
        })
    });
}