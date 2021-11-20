const res = (a, b) => {
    if(typeof(a) == "number" && typeof(b) == "number"){
        const resta = a - b
        return resta;
    } else {
        return "not a number"
    }
}

module.exports = res;