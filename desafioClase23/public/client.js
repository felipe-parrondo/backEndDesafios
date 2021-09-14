const socket = io();


let form = document.getElementById("form")

form.addEventListener("submit", function(e) {
  e.preventDefault();
  
  let user = document.getElementById("user")
  let input = document.getElementById("input")
  
  let msjfrw = {
    email: user.value,
    fecha: (new Date(Date.now() )).toString(),
    mensaje: input.value
  }
  
  socket.emit("mensajeNuevo", msjfrw);
  
  input.value = ""
})

socket.on("mensajeNuevoEmit", msj =>{
  let messages = document.getElementById("messages")
  let newM = document.createElement("li")
  let content = msj.email + " " + msj.fecha + ": " + msj.mensaje
  
  newM.textContent = content;
  
  messages.appendChild(newM)
})

socket.on("mensajesGuardados", msjs => {
  msjs.forEach(element => {
    let messages = document.getElementById("messages")
    let newM = document.createElement("li")
    let content = element.email + " " + element.fecha + ": " + element.mensaje
  
  newM.textContent = content;
  
  messages.appendChild(newM)
  })
})
