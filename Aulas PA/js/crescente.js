let notas = [];
let somaNotas = 0;

for (let i = 0; i < 4; i++) {
    let nota = parseFloat(prompt("Digite um número de 0 a 10: "));

    while (nota < 0 || nota > 10 || isNaN(nota)) {
        nota = parseFloat(prompt("Valor inválido. Digite um número de 0 a 10: "));
    }
    notas[i] = nota;
}
notas.sort();
console.log(notas.sort());