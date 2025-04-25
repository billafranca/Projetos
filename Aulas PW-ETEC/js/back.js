document.addEventListener("DOMContentLoaded", function() {
    var number = document.getElementById("nota");
    var enviar = document.getElementById("enviar");
  
    enviar.addEventListener("click", function() {



enviar.addEventListener("click", function() {
    var nota = Number(number.value);
    var mensagem;

    if (nota <= 5) {
        number.style.backgroundColor = "red";
        mensagem = "Como você não gosta do circular de Madureira??!";
    } else if (nota <= 7) {
        number.style.backgroundColor = "yellow";
        mensagem = "Razoável? Ent o tudo bem, mas vamos melhorar os gostos!";
    } else {
        number.style.backgroundColor = "green";
        mensagem = "Impossível não gostar do circular de Madureira, não tem jeito!";
    }

    alert(mensagem);
});

    });
  });