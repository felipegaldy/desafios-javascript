

var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split('\n')

let totalItems = lines.shift();
let pares = [];
let impares = [];

for (let i = 0; i < totalItems; i++) {
  let number = parseInt(lines.shift());
  if (number % 2 === 0 ){
    pares.push(number);
  }
  else {
    impares.push(number);
  }
}

pares.sort((a, b) => a - b)
impares.sort((a, b) => b - a)


    for(let i = 0; i < pares.length;i++) {
        console.log(pares[i])
    }
    for(let i = 0; i < impares.length;i++) {
        console.log(impares[i])
    }
