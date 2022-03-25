var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split('\n')

const numTotal = lines.shift();//espaços vazios
const numFigCompradas = lines.shift();//figurinhas compradas
const mySet = new Set();

for(let i = 0; i < numFigCompradas; i++){
    mySet.add(lines.shift());
};

console.log(numTotal - mySet.size);
