document.addEventListener("DOMContentLoaded", function () {
    const c1 = document.getElementById("c1");
    const c2 = document.getElementById("c2");
    const hip = document.getElementById("hipotenusa");
    const btn = document.getElementById("calcular");
    const res = document.getElementById("resultado");

    btn.addEventListener("click", function () {
        let a = Number(c1.value);
        let b = Number(c2.value);
        let h = Number(hip.value);

        if (!a && b && h) {
            a = Math.sqrt(h * h - b * b);
            res.textContent = "Cateto 1 = " + a.toFixed(2);
        } else if (a && !b && h) {
            b = Math.sqrt(h * h - a * a);
            res.textContent = "Cateto 2 = " + b.toFixed(2);
        } else if (a && b && !h) {
            h = Math.sqrt(a * a + b * b);
            res.textContent = "Hipotenusa = " + h.toFixed(2);
        } else {
            res.textContent = "Preencha apenas dois valores.";
        }
    });
});
