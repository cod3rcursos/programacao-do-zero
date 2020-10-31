function executar(param) {
    if(typeof param === "function") {
        console.log(param()); // <--- Parte central da aula
    }
}

function bomDia() {
    return "Bom dia";
}

executar(3);
executar(bomDia); // <--- Parte central da aula

const x = bomDia;
const y = bomDia();

console.log(x());
console.log(y);