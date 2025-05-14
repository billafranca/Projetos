document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("enviar").addEventListener("click", function() {
        var nota = document.getElementById("nota").value;
        
        
        nota = parseFloat(nota);
        
        if (nota < 0 || nota > 10) {
            console.log("Por favor, insira um número válido entre 0 e 10.");
        } else if (nota <= 5) {
            console.log("Que pena, mas obrigado!");
        } else if (nota <= 7) {
            console.log("Bom, obrigado!");
        } else {
            console.log("Muito obrigado!");
        }
    });
});
