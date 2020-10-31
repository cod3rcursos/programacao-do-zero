function sempreRetornaUm() {
    return 1;
}

function textoOuNumero(retornaTexto) {
    // return retornaTexto ? "Sou um texto!" : 123;
    if(retornaTexto) {
        return "Sou um texto!";
    }
    
    return 123;
}

let valor = sempreRetornaUm() + 999;
console.log(valor);

let texto = textoOuNumero(true);
console.log(texto);

console.log(textoOuNumero(false));