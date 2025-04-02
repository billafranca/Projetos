var peso = parseInt(prompt("digite o seu peso: "));
var valormaximo = 80;

if (peso > valormaximo) {
    console.log("o lutador está com o peso acima do permitido.");
    alert("o lutador está com o peso acima do permitido.");
} else if (peso === valormaximo) {
    console.log("o lutador está com o peso dentro do permitido.");
    alert("o lutador está com o peso dentro do permitido.");
} else {
    console.log("o lutador está com o peso abaixo do permitido.");
    alert("o lutador está com o peso abaixo do permitido.");
}

