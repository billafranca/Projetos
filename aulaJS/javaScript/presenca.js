var presenca = parseInt(prompt("digite a sua presenca: "));
var aulassemestre = parseInt(prompt("digite o numero de aulas do semestre: "));

var resultado = (presenca >= 75 && aulassemestre >= 80) ||
 (presenca >= 75 || aulassemestre >= 80) ? "aprovado" : "aluno retido por excercer número de faltas";

console.log(`voce foi ${resultado}`);
alert(`voce foi ${resultado}`);
