const socket = io();

socket.on("miMensaje", data => {
    alert(data);
});

var form = document.getElementById("form")

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let t = document.getElementById("title");
    let p = document.getElementById("price");
    let th = document.getElementById("thumbnail");

    socket.emit("cargaProductos", {
        title: t.value, 
        price: p.value, 
        thumbnail: th.value
    });

    let tabla = document.getElementById("tbody")
    console.log(tabla.textContent)
    let ultimaFila = tabla.lastChild;
    console.log(ultimaFila.textContent)

    let tableR = document.createElement("tr")
    let tableT = document.createElement("td")
    tableT.textContent = t.value
    let tableP = document.createElement("td")
    tableP.textContent = p.value
    let tableTh = document.createElement("td")
    tableTh.textContent = th.value
    let tableNum = document.createElement("td")
    tableNum.textContent = 0

    tableR.appendChild(tableNum)
    tableR.appendChild(tableT)
    tableR.appendChild(tableP)
    tableR.appendChild(tableTh)
    document.getElementById("tbody").appendChild(tableR)

    t.value = ""
    p.value = ""
    th.value = ""
});