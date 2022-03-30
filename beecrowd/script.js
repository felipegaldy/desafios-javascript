

var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split('\n')

const c = parseInt(lines.shift());
var v = new Array(c)

for (let i = 0; i < c; i++){
  v[i] = parseInt(lines.shift());
}

let  primeiroInscrito = true;

const teste  = Number(v.shift());


for(let i = 0; i < c; i++) {
  const bobo  = Number(v[i]);

  if ( teste < bobo) {
    primeiroInscrito = false;
  }
};

console.log(primeiroInscrito ? "S" : "N");
