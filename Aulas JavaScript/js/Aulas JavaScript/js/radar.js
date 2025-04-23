const velocidadeMaxima = 80;
const multa = 3100;
const velocidade = parseFloat(prompt("Digite a velocidade (km/h): "));

if (velocidade >= velocidadeMaxima + 20) {
    console.log("Você foi multado! ");
    const multaFinal = multa + 0;
    console.log(`Você deve pagar ${multaFinal} reais de multa`);
    
} else if (velocidade >= 80 +10) {
    console.log("você será multado! ")
    const finalMulta = multa - (multa - 10);
    console.log(`redução da multa, a velocidade não ultrapassou exageradamente. você pagará ${finalMulta} reais de multa. `);	 
}else if (velocidade <= velocidadeMaxima - 60) {
    console.log ("você não será multado, porém, acelera isso aí, pô!")
}else{
    console.log("você não será multado! ");
}

