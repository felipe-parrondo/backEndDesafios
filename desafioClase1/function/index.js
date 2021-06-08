function Usuario (nombre, apellido, libros, mascotas) {

    this.nombre = nombre
    this.apellido = apellido
    this.libros = libros
    this.mascotas = mascotas


    Usuario.prototype.getFullName = function () {
        console.log(this.nombre + " " + this.apellido)
    }

    Usuario.prototype.addMascota = function (tempObj) {
        this.mascotas.push(tempObj)
    }

    Usuario.prototype.getMascota = function () {
        console.log(this.mascotas.length)
    }

    Usuario.prototype.addBook = function (n, a) {
        let libroTemp = new Libro(n, a)
        this.libros.push(libroTemp)
    }

    Usuario.prototype.getBooks = function () {
        this.libros.map( (x) => {
            console.log(x.nombre)
        })
    }
}

function Libro (nombre, autor) {
    this.nombre = nombre
    this.autor = autor
}

let libro1 = new Libro ("LOTR", "Tolkien")
let libro2 = new Libro ("1984", "O")
let lArray = [libro1, libro2]

let mArray = ["perro", "gato"]

var pipent = new Usuario ("Felipe", "Parrondo", lArray, mArray)