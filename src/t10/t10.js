function makePW() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖabcdefghijklmnopqrstuvwxyzåäö";
    let badpw = document.getElementById("pwinput").value;
    let goodpw = "";
    for (let i = 0; i < badpw.length; i++) {
        let letterindex = Math.floor(Math.random() * letters.length);
        goodpw += badpw[i] + letters[letterindex];
    }
    document.getElementById("t10v").innerHTML = goodpw;
}