

var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split('\n')

let valor = parseInt(input);
let horas = parseInt(valor/3600)
valor = valor%3600
let minutos = parseInt(valor/60)
valor = valor%60

console.log(`${horas}:${minutos}:${valor}`)