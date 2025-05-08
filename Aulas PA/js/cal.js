var expression = prompt("Digite a expressão (ex: 3 + 4): ");
try {
    var result = eval(expression);
    if (isNaN(result)) {
        throw "Operação inválida";
    }
    alert(result);
} catch (e) {
    alert("Operação inválida");
}
