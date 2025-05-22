var soma_pares = 0;
var soma_impares = 0;
var maior = "";

for (let i = 1; i <= 100; i ++) {
    if (i % 2 == 0) {
        soma_pares = soma_pares + i;
    } else {
        soma_impares = soma_impares + i;
    }
}

(soma_impares > soma_pares) ? maior = "Soma dos Impares" : maior = "Soma dos Pares";

console.log("Soma dos números pares: " + soma_pares + "\nSoma dos números impares: " + soma_impares + "\nMaior soma: " + maior);