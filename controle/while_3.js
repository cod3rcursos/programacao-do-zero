const futuro = Date.now() + 2000;
let quantidade = 0;

while(Date.now() < futuro) {
    quantidade++;
}

// Qtde: 32543784
// Qtde: 32525345
console.log('Qtde: ' + quantidade);