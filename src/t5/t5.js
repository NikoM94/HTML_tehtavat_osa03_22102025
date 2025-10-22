function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        document.getElementById("t5v").innerText += (i % 3 === 0 && i % 5 === 0) ? "hipheijaa" :
            (i % 3 === 0) ? "hip" :
            (i % 5 === 0) ? "heijaa" :
            i;
        document.getElementById("t5v").innerText += "\n";
    }
}