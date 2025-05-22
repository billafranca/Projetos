document.addEventListener("DOMContentLoaded", function() {
    var num1 = document.getElementById("in1")
    var num2 = document.getElementById("in2")
    var num3 = document.getElementById("in3")
    var num4 = document.getElementById("in4")
    var calcular = document.getElementById("cal")
    var result = document.getElementById("result")

      let somaNotas = 0.0;
    let media = 0.0

    calcular.addEventListener("click", function(){
    let n1 = Number(n1.value);
    let n2= Number(n2.value);
    let n3= Number(n3.value);
    let n4= Number(n4.value);

    })
        if(n1 <=10 && n1 >=0 && n2 <=10 && n2 >=0 && n3 <=10 && n3 >=0 && n4 <=10 && n4 <=0){
            somaNotas = n1 + n2 + n3 + n4;
            media = somaNotas /4;
            result.textContent = "a média é: ", media

        }else{
            result.textContent = "apenas entre 0 e 10"
        }
});


  


