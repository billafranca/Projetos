const alturaminima = 1.50;
var altura = parseFloat(prompt("Qual a altura do indivíduo(a)?"));

if(altura < alturaminima){
    console.log("altura abaixo, não poderá subir na montanha russa! ");
}else{
    console.log("altura adequada, suba na montanha russa! ");
}
