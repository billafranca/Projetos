let maior;
let menor;
let numeros = [];

for (let i = 0; i < 5; i++) {
    let numero = parseFloat(prompt("Digite um número de 0 a 100: "));

    while (numero < 0 || numero > 100 || isNaN(numero)) {
        numero = parseFloat(prompt("Valor inválido. Digite um número de 0 a 100: "));
    }
    numeros.push(numero);
}

menor = Math.min(...numeros);
maior = Math.max(...numeros);

console.log("Números digitados:", numeros);
console.log("Menor número:", menor);
console.log("Maior número:", maior);

