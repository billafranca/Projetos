var expression = prompt("Digite a expressão (ex: 3 + 4): ");
try {
    var result = eval(expression);
    if (isNaN(result)) {
        throw "Operação inválida";
    }
    console.log(result);
} catch (e) {
    console.log("Operação inválida");
}
