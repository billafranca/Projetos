let media;
let nota;
let somaNotas = 0;

for (let i = 0; i < 4; i++) {
    nota = parseFloat(prompt("Digite um número de 0 a 10: "));

    while (nota < 0 || nota > 10 || isNaN(nota)) {
        nota = parseFloat(prompt("Valor inválido. Digite um número de 0 a 10: "));
    }

    somaNotas += nota;
}

media = somaNotas / 4;
console.log("Sua média é:", media);
