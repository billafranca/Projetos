document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("enviar").addEventListener("click", function() {
        var nota = document.getElementById("nota").value;
        
        // Converte o valor para número
        nota = parseFloat(nota);
        
        if (nota < 5) {
            alert("que pena, mas obrigado!");
        } else if (nota <=7){
            alert("bom, obrigado!");
        }
        else
            alert("muito obrigado!");
    });
});
