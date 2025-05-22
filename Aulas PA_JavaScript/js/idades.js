var idade = parseInt(prompt("Qual a sua idade? "));

if (idade >= 18 && idade <= 60){
    console.log("adulto");
}else if(idade <= 0){
    console.log("idade inválida");
}else if(idade <=11){
    console.log("crianca");
}else if(idade <=17){
    console.log("adolescente");
}else if(idade >= 100){
    console.log("inválida");
}else{
    console.log("idoso");
}
