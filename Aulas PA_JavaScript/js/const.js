const radarDeVelocidade = 80;
const multaMinima = 2500;
const multaMaxima = 3100;

var velocidade = parseFloat(prompt("Qual a velocidade do automóvel?"));

if (velocidade > radarDeVelocidade) {
    console.log("Você foi multado");

    if (velocidade <= radarDeVelocidade + 10) {
        console.log(`${multaMaxima} reais de multa`);
    } else {
        console.log(`${multaMaxima} reais de multa`);
    }

    var escolha = parseInt(prompt("Deseja reduzir o valor da multa? 1 - Sim, 2 - Não"));

    switch (escolha) {
        case 1:
            console.log(`${multaMinima} reais de multa`);
            break;
        case 2:
            console.log(`${multaMaxima} reais de multa`);
            break;
        default:
            console.log("Liberado");
    }
} else {
    console.log("Você não foi multado");
}

