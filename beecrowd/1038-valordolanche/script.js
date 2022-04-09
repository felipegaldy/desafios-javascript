

var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split(' ')


var cod = parseInt(lines.shift());
var qtd = parseInt(lines.shift());

if (cod === 1){
    let total = parseFloat(qtd * 4.00).toFixed(2)
    console.log(`Total: R$ ${total}`)
}
if (cod === 2){
    let total = parseFloat(qtd * 4.50).toFixed(2)
    console.log(`Total: R$ ${total}`)
}
if (cod === 3){
    let total = parseFloat(qtd * 5.00).toFixed(2)
    console.log(`Total: R$ ${total}`)
}
if (cod === 4){
    let total = parseFloat(qtd * 2.00).toFixed(2)
    console.log(`Total: R$ ${total}`)
}
if (cod === 5){
    let total = parseFloat(qtd * 1.50).toFixed(2)
    console.log(`Total: R$ ${total}`)
}