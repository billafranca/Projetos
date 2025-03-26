var saldo = 20000
var saque = parseInt(prompt("digite o valor do saque: "));

if (saque > saldo){
    console.log("saldo insuficiente");
    alert("saldo insuficiente");
}
else{
    saldo = saldo - saque;
    console.log("o seu saldo atual é: ",saldo);
    alert("o seu saldo atual é: "+saldo);
}