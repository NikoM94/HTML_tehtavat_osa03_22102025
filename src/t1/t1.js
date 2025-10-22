function printNumbers() {
    let num1 = parseInt(document.getElementById("num1").value);
    let nums = [];
    for (let i = 2; i <= num1; i += 2) {
        nums.push(i);
    }
    document.getElementById("t1v").innerHTML = nums.join(", ");
}