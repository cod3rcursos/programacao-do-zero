function executar(fn, n1 = 10, n2 = 10) {
    if(typeof fn === "function") {
        console.log(fn(n1, n2));
    }
}

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

executar(somar, 90, 50);
executar(subtrair, 90, 50);
executar(multiplicar, 90, 50);
executar(multiplicar, 900, 500);
executar(somar);
