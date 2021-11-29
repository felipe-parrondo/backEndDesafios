class Usuario {

    constructor (nombre, apellido, libros, mascotas) {

        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName () {
        console.log(this.nombre + " " + this.apellido)
    }

    addMascota (tempObj) {
        this.mascotas.push(tempObj)
    }

    getMascota () {
        console.log(this.mascotas.length)
    }

    addBook (n, a) {
        let libroTemp = new Libro(n, a)
        this.libros.push(libroTemp)
    }

    getBooks () {
        this.libros.map( (x) => {
            console.log(x.nombre)
        })
    }
}

class Libro {
    constructor (nombre, autor) {
        this.nombre = nombre
        this.autor = autor
    }
}

let libro1 = new Libro ("LOTR", "Tolkien")
let libro2 = new Libro ("1984", "O")
let lArray = [libro1, libro2]

let mArray = ["perro", "gato"]

var pipent = new Usuario ("Felipe", "Parrondo", lArray, mArray)