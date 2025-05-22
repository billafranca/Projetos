var lado1, lado2, lado3;

lado1=parseFloat(prompt("digite o valor do lado 1: "));
lado2=parseFloat(prompt("digite o valor do lado 2: "));
lado3=parseFloat(prompt("digite o valor do lado3: "));

if (lado1 == lado2 &  lado3 == lado1){
    console.log("equilátero");
    console.log("equilátero");
}
else if(lado1 != lado2  &  lado3 != lado1){
    console.log("escaleno");
    console.log("escaleno");
}
else{
    console.log("isosceles");
    console.log("isosceles");
}
    
