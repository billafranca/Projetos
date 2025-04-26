document.addEventListener("DOMContentLoaded", function() {
    var number = document.getElementById("nota");
    var enviar = document.getElementById("enviar");
  
    enviar.addEventListener("click", function() {



enviar.addEventListener("click", function() {
    var nota = Number(number.value);
    var mensagem;

    if (nota <= 5) {
        number.style.backgroundColor = "red";
        mensagem = "você não gosta? que péssimo gosto em rapaz!";
    } else if (nota <= 7) {
        number.style.backgroundColor = "yellow";
        mensagem = "Razoável? Então tudo bem, mas vamos melhorar os gostos!";
    } else {
        number.style.backgroundColor = "green";
        mensagem = "aí sim, os ônibus do rio são muito mídia, não tem jeito!";
        window.location.href = "https://pt.wikipedia.org/wiki/Hist%C3%B3ria_do_%C3%B4nibus_urbano_no_Rio_de_Janeiro";
    }

    alert(mensagem);
});

    });
  });