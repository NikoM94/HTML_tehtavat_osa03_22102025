function makePW() {
    let badpw = document.getElementById("pwinput").value;
    let letter = "Ö";
    let goodpw = "";
    for (let i = 0; i < badpw.length; i++) {
        goodpw += badpw[i] + letter;
    }
    document.getElementById("t2v").innerHTML = goodpw;
}