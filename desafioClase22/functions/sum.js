const sum = (a, b) => {
    if(typeof(a) == "number" && typeof(b) == "number"){
        const suma = a + b
        return suma;
    } else {
        return "not a number"
    }
}

module.exports = sum;