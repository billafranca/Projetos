let maior = 0;
let menor = 100;
let numeros;

for (let i = 0; i < 5; i++) {
    let numero = parseFloat(prompt("Digite um número de 0 a 100: "));

    while (numero < 0 || numero > 100 || isNaN(numero)) {
        numero = parseFloat(prompt("Valor inválido. Digite um número de 0 a 100: "));
    }
        if (numero > maior) {
            maior = numero;
        }
        if (numero < menor) {
            menor = numero;
        }    
}
console.log("maior número: ", maior);
console.log("menor número: ", menor);

console.log("aqui é corinthians!")
