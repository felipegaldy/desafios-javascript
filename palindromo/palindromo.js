var input = require('fs').readFileSync('stdin','utf8');//Recebe valor a ser verificado

const isPalindromo = (str) => {
    if(!str)return console.log('ERROR: Insira um valor válido.');//verifica se o valor é válido
    var strR = str.split('').reverse().join('');//recebe valor, separa cada elemento, reverte e junta novamente
    if(str.split(' ').join('') === strR.split(' ').join('')){//faz verificação se cada elemento junto da variável é igual cada elemento junto da variável revertida
        console.log('É um palíndromo!')//caso sim retorna é um palindromo
    }else {
        console.log('Não é um palíndromo!')//caso não seja retorna não é um palindromo
    }
}

isPalindromo(input);