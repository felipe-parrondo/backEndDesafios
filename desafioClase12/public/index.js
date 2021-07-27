const socket = io();

socket.on("miMensaje", data => {
    alert(data);
});