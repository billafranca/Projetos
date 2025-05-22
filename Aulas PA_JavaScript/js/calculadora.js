    document.addEventListener("DOMContentLoaded", function(){
    let number1 = document.getElementById("number1");
    let number2 = document.getElementById("number2");

    const somar = document.getElementById("somar");
    const subtrair = document.getElementById("subtrair");
    const dividir = document.getElementById("dividir");
    const multiplicar = document.getElementById("multiplicar");

    const resultadoElement = document.getElementById("resultado");

    somar.addEventListener("click", function(){
        const resultado = Number(number1.value) + Number(number2.value);
        resultadoElement.textContent = `O resultado: ${resultado}`;
    });

    subtrair.addEventListener("click", function(){
        const resultado = Number(number1.value) - Number(number2.value);
        resultadoElement.textContent = `O resultado: ${resultado}`;
    });

    dividir.addEventListener("click", function(){
        if(Number(number2.value) === 0) {
            console.log("Não é possível dividir por zero.");
        } else {
            const resultado = Number(number1.value) / Number(number2.value);
            resultadoElement.textContent = `O resultado: ${resultado}`;
        }
    });

    multiplicar.addEventListener("click", function(){
        const resultado = Number(number1.value) * Number(number2.value);
        resultadoElement.textContent = `O resultado: ${resultado}`;
    });
});
