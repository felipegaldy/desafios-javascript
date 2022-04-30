var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split(' ')

var inicio = parseInt(lines.shift());
var fim = parseInt(lines.shift());

if (inicio > fim){
    fim += 24
    var duracao = fim - inicio
    console.log(`O JOGO DUROU ${duracao} HORA(S)`)
}else if (inicio == fim) {
   console.log('O JOGO DUROU 24 HORA(S)')
}else {
    var duracao = fim - inicio
    console.log(`O JOGO DUROU ${duracao} HORA(S)`)
}