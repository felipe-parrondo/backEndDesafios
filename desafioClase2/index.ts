async function operacion (n1:number, n2:number, op:string) {

    if(op === "suma"){

        let modulo = await import("./src/Suma/suma")
        let suma = new modulo.Suma(n1, n2)
        let resultado = suma.resultado()
        return Promise.resolve(resultado)

    } else {

        let modulo = await import("./src/Resta/resta")
        let resta = new modulo.Resta(n1, n2)
        let resultado = resta.resultado()
        return Promise.resolve(resultado)

    }
}

const cPrueba: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const operaciones = () => {

    let n1:number = Math.random();
    n1 = cPrueba[n1*10]; // redundante hacer esto cuando son literalmente numeros del 1 al 10 en el array, pero para cumplir la consigna al pie de la letra

    let n2:number = Math.random();
    n2 = cPrueba[n2*10];

    let opSelector:number = Math.random()
    opSelector = opSelector * 10

    let op:string

    if(opSelector < 5) {
        op = "suma"
    } else {
        op = "resta"
    }

    console.log("Se " + op + " el numero " + n1 + " y el numero " + n2)

    operacion(n1, n2, op)

}

operaciones()