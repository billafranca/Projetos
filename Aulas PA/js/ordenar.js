var a, b, c;

a = parseFloat(prompt("digite o número 1: "));
b = parseFloat(prompt("digite o número 2: "));
c = parseFloat(prompt("digite o número 3: "));



if (a <= b && a <= c) {
    if (c <= b) {
        alert(`${a} ${c} ${b}`);
    } else {
        alert(`${a} ${b} ${c}`);
    }
} else if (b <= c && b <= a) {
    if (a >= c) {
        alert(`${b} ${c} ${a}`);
    } else {
        alert(`${b} ${a} ${c}`);
    }
}
else if (c <= a && c <= b) {
    if (a >= b) {
        alert(`${c} ${b} ${a}`);
    } else {
        alert(`${c} ${a} ${b}`);
    }
}

