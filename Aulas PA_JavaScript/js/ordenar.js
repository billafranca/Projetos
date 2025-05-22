var a, b, c;

a = parseFloat(prompt("digite o número 1: "));
b = parseFloat(prompt("digite o número 2: "));
c = parseFloat(prompt("digite o número 3: "));



if (a <= b && a <= c) {
    if (c <= b) {
        console.log(`${a} ${c} ${b}`);
    } else {
        console.log(`${a} ${b} ${c}`);
    }
} else if (b <= c && b <= a) {
    if (a >= c) {
        console.log(`${b} ${c} ${a}`);
    } else {
        console.log(`${b} ${a} ${c}`);
    }
}
else if (c <= a && c <= b) {
    if (a >= b) {
        console.log(`${c} ${b} ${a}`);
    } else {
        console.log(`${c} ${a} ${b}`);
    }
}

