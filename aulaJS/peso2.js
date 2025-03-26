var peso = parseFloat(prompt("Digite o seu peso: "));
var altura = parseFloat(prompt("Digite a sua altura: "));
var imc = peso / (altura * altura);

console.log("O seu IMC é: ", imc);
alert("O seu IMC é: " + imc);