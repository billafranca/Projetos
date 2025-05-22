const velocidadeMaxima = 80;
const multaBase = 3100; 
const velocidade = parseFloat(prompt("Digite a velocidade (km/h): "));

switch (true) {
    case velocidade >= velocidadeMaxima + 20:
        console.log("Você foi multado!");
        const multaExagerada = multaBase; 
        console.log(`Você deve pagar ${multaExagerada} reais de multa.`);
        break;

    case velocidade >= velocidadeMaxima + 10:
        console.log("Você será multado!");
        const multaReduzida = multaBase - 10; 
        console.log(`A velocidade não ultrapassou exageradamente. Você pagará ${multaReduzida} reais de multa.`);
        break;

    case velocidade <= velocidadeMaxima - 20:
        console.log("Você não será multado, mas acelere essa máquina paizão!");
        break;

    default:
        console.log("Você não será multado!");
        break;
}