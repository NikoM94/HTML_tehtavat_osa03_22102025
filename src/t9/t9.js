function findMinMax() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let num4 = parseInt(document.getElementById("num4").value);
    let num5 = parseInt(document.getElementById("num5").value);
    let numbers = [num1, num2, num3, num4, num5].sort((a, b) => a - b);
    document.getElementById("t9v").innerHTML = "Pienin luku: " + numbers[0] + "<br>Suurin luku: " + numbers[numbers.length - 1];
}