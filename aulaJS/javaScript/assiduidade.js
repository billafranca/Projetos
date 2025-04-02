var salario, bonus, assiduidade, pontualidade;
salario = parseInt(prompt("digite o seu salario: "));
assiduidade = parseInt(prompt("digite a sua assiduidade: "));
pontualidade = parseInt(prompt("digite a sua pontualidade: "));

if (assiduidade >= 80 && pontualidade >= 80) {
    bonus = 0.10; 
    console.log("o seu salario total é: ", salario + (salario + bonus));
}   
else if (assiduidade >= 80 || pontualidade >= 80) {
    bonus = 50;
    console.log("o seu salario total é: ", salario + (salario + bonus));
}
else {
    bonus = 0;
}