var freqrespiratoria = parseFloat(prompt("Digite a sua frequência respiratória: "));
var freqnormal = 12;

if (freqrespiratoria < freqnormal) {
    console.log("bradipneia.");
    alert("bradipneia");
} else if (freqrespiratoria === freqnormal) {
    console.log("eupneia");
    alert("eupneia");
} else {
    console.log("taquipneia");
    alert("taquipneia");
}
