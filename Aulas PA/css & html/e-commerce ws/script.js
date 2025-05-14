document.addEventListener("DOMContentLoaded", function() {
    const comp_preco = 2300;
    const tv_preco = 1200;
    const add_com = document.getElementById("add1");
    const add_tv = document.getElementById("add2");
    const car = document.getElementById("car");
    let amt_com = 0;
    let amt_tv = 0;
    let carrinho = 0.00;

    add_com.addEventListener("click", function() {
        console.log("Computador adicionado ao carinho");
        carrinho += comp_preco;
        amt_com += 1;
        if (amt_tv == 0) {
            document.getElementById("comprados").textContent = amt_com + "x Computadores";
        } else {
            document.getElementById("comprados").textContent = amt_com + "x Computadores\n" + amt_tv + "x Televisões";
        }
        car.textContent = "$" + carrinho;
    })

    add_tv.addEventListener("click", function() {
        console.log("Televisão adicionado ao carinho");
        carrinho += tv_preco;
        amt_tv += 1;
        if (amt_com == 0) {
            document.getElementById("comprados").textContent = amt_tv + "x Televisões";
        } else {
            document.getElementById("comprados").textContent = amt_com + "x Computadores\n" + amt_tv + "x Televisões";
        }
        car.textContent = "$" + carrinho;
    })
});