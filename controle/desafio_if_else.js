const a = 10;
const b = 28;
const operacao = '?'; // + - * / %

let resultado;

// if ... else if ... else
if(operacao === '+') {
    resultado = a + b;
} else if(operacao === '-') {
    resultado = a - b;
} else if(operacao === '*') {
    resultado = a * b;
} else if(operacao === '/') {
    resultado = a / b;
} else if(operacao === '%') {
    resultado = a % b;
}

console.log(resultado);