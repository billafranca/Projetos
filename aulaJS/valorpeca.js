var codigopeca, valorpeca, quantpeca, total;

codigopeca = parseInt(prompt("digite o codigo da peca: "));
valorpeca = parseFloat(prompt("digite o valor da peca: "));
quantpeca = parseInt(prompt("digite a quantidade de pecas: "));

total = quantpeca*valorpeca;

console.log("o total a pagar é: ",total);
alert("o total a pagar é: "+total);