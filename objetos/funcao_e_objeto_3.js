// Função Construtora (Classe) -> Objeto
function Data(dia = 1, mes = 1, ano = 2021) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;

    this.exibir = function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

const d1 = new Data();
d1.ano = 1970;
d1.mes = 12;

const d2 = new Data(24, 12, 2022);
const d3 = new Data(31, 12, 2021);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());

console.log(d1);
console.log(d2);
console.log(d3);
