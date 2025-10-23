function expon() {
    let base = document.getElementById("base").value;
    let exponent = document.getElementById("exponent").value;
    let product = 1;
    for (let i = 0; i < exponent; i++) {
        product *= base
    }
    document.getElementById("t8v").innerText = product;
}