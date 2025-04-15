const radardevelocidade = 80;
const velocidade = parseFloat(prompt("Qual a velocidade do automóvel?"));


if (velocidade > radardevelocidade) {
    console.log("Você foi multado");
}
else{
    console.log("Voce não foi multado ");
}

function escolhervalormulta(velocidade){
    if (velocidade > radardevelocidade){
        console.log("3100,00 reais de multa");        
    }
    else if (velocidade > 80 && velocidade < 90){
        console.log("2500,00 reais de multa, redução apenas se a velocidade foi entre 80 e 90");
    }
    else{
        console.log("liberado");
    }
}
function escolha(){
    var escolhamulta = parseInt(prompt("digite se quer reduzir o valor da multa:"));

    switch (escolhamulta) {
        case 1:
            console.log("3100,00 reais de multa");
            break;
        case 2:
            console.log("2500,00 reais de multa, redução apenas se a velocidade foi entre 80 e 90");
            break;
        default:
            console.log("liberado")
}
}