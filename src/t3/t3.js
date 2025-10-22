function checkLetter() {
    const input = document.getElementById("wordInput").value;
    const letterToCheck = 'ö';
    document.getElementById("t3v").innerHTML = input.includes(letterToCheck) ? "on" : "ei ole";
}