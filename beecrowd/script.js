var input = require('fs').readFileSync('stdin','utf8');
var liduracoesnes = input.split('')

function acharMinimoDeDias(duracoes) {
    // Write your code here
    duracoes.sort((a,b)=>a-b);
    let dias = 1;
    let horas = 0;
    for(let i = 0; i < duracoes.length; i++){
            horas += duracoes[i];
            if (horas >= 3.0){
                horas -= duracoes[i-1];
                horas = duracoes[i];
                dias++
            }
    }
    return dias;
}

acharMinimoDeDias(lines)