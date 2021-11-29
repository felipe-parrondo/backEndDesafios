const fs = require("fs"); 

const productos = 
[                                                                                                                                                     
    {                                                                                                                                                    
      title: 'Escuadra',                                                                                                                                 
      price: 123.45,                                                                                                                                     
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                     
      id: 1                                                                                                                                              
    },                                                                                                                                                   
    {                                                                                                                                                    
      title: 'Calculadora',                                                                                                                              
      price: 234.56,                                                                                                                                     
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                          
      id: 2                                                                                                                                              
    },                                                                                                                                                   
    {                                                                                                                                                    
      title: 'Globo Terráqueo',                                                                                                                          
      price: 345.67,                                                                                                                                     
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                   
      id: 3                                                                                                                                              
    }                                                                                                                                                    
];

class Archivo {
    constructor() {}

    static leer() {
        fs.readFile("./archivo.txt", "utf-8", (e, c) => {
            if(e) {
                console.log(e);
            } else {
                console.log(JSON.parse(c));
            }
        })
    }

    static guardar(newItem) {

        fs.readFile("./archivo.txt", "utf-8", (e, c) => {
            if(e) {

                console.log("Ningun directorio con ese nombre, creando uno nuevo con productos de prueba");

                fs.appendFile("./archivo.txt", JSON.stringify(productos), e => {
                    if(e) {
                        console.log(e);
                    } else {
                        console.log("Agregado de manera exitosa!");
                    }
                })

            } else {

                console.log(c + "log linea 44")
                let tempAgregar = JSON.parse(c)
                tempAgregar.push(newItem)
                tempAgregar[tempAgregar.length - 1].id = tempAgregar.length;

                fs.appendFile("./archivo.txt", JSON.stringify(tempAgregar), e => {
                    if(e) {
                        console.log(e);
                    } else {
                        console.log("Agregado de manera exitosa!");
                    }
                })

            }
        })
    }

    static borrar() {
        fs.unlink("./archivo.txt", e => {
            if(e) {
                console.log(e);
            } else {
                console.log("Borrado de manera exitosa!")
            }
        })
    }
}