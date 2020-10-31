const notas = [7, 8, 3, 5, 10, 9, 8, 8];

let valores = '';

// foreach
for(let nota of notas) {
    valores += nota + ' ';
}

console.log(valores);

let indices = '';

for(let indice in notas) {
    indices += indice + ' ';
}

console.log(indices);