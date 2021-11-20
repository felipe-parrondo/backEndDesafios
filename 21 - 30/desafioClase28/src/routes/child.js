//en esta carpeta para hacerlo simple

process.on("comunication", (x) => {
    let num = parseInt(x);

    for(let i = 0; i < num; i++) {
        process.send(( "numero " + i + " " + Math.random()) * 1000 )
    }
})