const div = (a, b) => {
    if(typeof(a) == "number" && typeof(b) == "number"){
        const division = a / b
        return division;
    } else {
        return "not a number"
    }
}

module.exports = div;