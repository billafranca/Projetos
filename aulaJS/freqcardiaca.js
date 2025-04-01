var freqnormal = 60;
var freqcardiaca = parseInt(prompt("digite a sua frequencia cardiaca: "));

if (freqcardiaca < 60) {
    console.log("braquicardia");
    alert("braquicardia");
} else if (freqcardiaca >= 60 && freqcardiaca <= 100) {
    console.log("Nomocardia");
    alert("Nomocardia");
} else {
    console.log("taquicardia");
    alert("taquicardia");
}