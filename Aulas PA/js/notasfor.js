var somaNotas;
var notas;
let media;
for(let i = 0; i <4; i++){
    notas = parseFloat(prompt("insira a nota"+ (i+1)+":"));
    somaNotas += notas

    if(notas >10 || nota < 0 || !notas.isNaN()){
        console.log("inválidas")
        i -=1
    }

    }
    media = notas / 4;
    console.log("sua média é: "+ media);
    