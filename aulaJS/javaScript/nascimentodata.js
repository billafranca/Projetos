var diaNascimento = parseInt(prompt("Digite o dia do seu nascimento: "));
var anoNascimento = parseInt(prompt("Digite o ano do seu nascimento: "));
var anoAtual = parseInt(prompt("Digite o ano atual: "));
let idade = anoAtual - anoNascimento;


if (diaNascimento > new Date().getDate()) {
  idade -= 1;
}
console.log(`Voce tem ${idade} anos`);
alert(`Voce tem ${idade} anos`);
