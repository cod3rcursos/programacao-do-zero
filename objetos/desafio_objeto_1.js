// Objeto data
// Atributos: dia, mes e ano
// Método: exibir -> "dia/mes/ano"

const nascimento = {
    dia: 9,
    mes: 10,
    ano: 2010,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

nascimento.dia = 11;

console.log(nascimento.mes);
console.log(nascimento.exibir());