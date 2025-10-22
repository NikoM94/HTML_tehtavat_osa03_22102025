function kertoma() {
    let num = parseInt(document.getElementById("num").value);
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }   
    document.getElementById("t4v").innerText = "Luvun " + num + " kertoma on " + result;
}