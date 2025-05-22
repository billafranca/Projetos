let a, b, c;
let x1, x2;
let delta;


 a = parseFloat(prompt("digite o valor de a: "));
 b = parseFloat(prompt("digite o valor de b: "));
 c = parseFloat(prompt("digite o valor de c: "));

 delta = (b*b) -4 * a * c;

 x1 = (-(b) + Math.sqrt(delta))/2*a;
 x2 = (-(b) - Math.sqrt(delta))/2*a;

 console.log("x1 = " + x1 + " x2 = " + x2)




