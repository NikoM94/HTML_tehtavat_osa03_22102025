function printOddEven() {
    const smallerNum = parseInt(document.getElementById("smallerNum").value);
    const biggerNum = parseInt(document.getElementById("biggerNum").value);
    let evenSum = 0;
    let oddSum = 0;
    document.getElementById("t11veven").innerHTML = "Parilliset numerot: ";
    document.getElementById("t11vodd").innerHTML = "Parittomat numerot: ";
    for (let i = smallerNum; i <= biggerNum; i++) {
        if (i % 2 === 0) {
            document.getElementById("t11veven").innerHTML += i + " ";
            evenSum += i;
        } else {
            document.getElementById("t11vodd").innerHTML += i + " ";
            oddSum += i;
        }
    }
    document.getElementById("t11veven").innerHTML += "ja niiden summa: " + evenSum;
    document.getElementById("t11vodd").innerHTML += "ja niiden summa: " + oddSum;
}