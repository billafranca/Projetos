function escolha() {
    var escolha = prompt("Escolha uma opção:\n1 - Somar\n2 - Subtrair\n3 - Multiplicar\n4 - Dividir");

    switch (escolha) {
        case "1":
            var num1 = prompt("Digite o primeiro número:");
            var num2 = prompt("Digite o segundo número:");
            var resultado = parseFloat(num1) + parseFloat(num2);
            console.log("O resultado da soma é: " + resultado);    
            break;
        case "2":
            var num1 = prompt("Digite o primeiro número:");
            var num2 = prompt("Digite o segundo número:");
            var resultado = parseFloat(num1) - parseFloat(num2);
            console.log("O resultado da subtração é: " + resultado);    
            break;
        case "3":
            var num1 = prompt("Digite o primeiro número:");
            var num2 = prompt("Digite o segundo número:");
            var resultado = parseFloat(num1) * parseFloat(num2);
            console.log("O resultado da multiplicação é: " + resultado);    
            break;
        case "4":
            var num1 = prompt("Digite o primeiro número:");
            var num2 = prompt("Digite o segundo número:");
            var resultado = parseFloat(num1) / parseFloat(num2);
            console.log("O resultado da divisão é: " + resultado);    
            break;
        default:
            console.log("Opção inválida!");
    }
}