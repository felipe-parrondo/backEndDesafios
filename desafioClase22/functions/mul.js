const mul = (a, b) => {
    if(typeof(a) == "number" && typeof(b) == "number"){
        const multiplicacion = a * b
        return multiplicacion;
    } else {
        return "not a number"
    }
}

module.exports = mul;