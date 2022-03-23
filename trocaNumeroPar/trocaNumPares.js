/* Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo:
Input -> [1, 3, 4, 6, 80, 33, 23, 90]

Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []

Output -> -1 */
var input = require('fs').readFileSync('stdin','utf8');//recebe o valor a ser verificado - aprendi isso no youtube link: https://www.youtube.com/channel/UCEeOZsBawGWSUieDaMQsDww
var lines = input.split(' ')
var numArray = [];
/*for (let i=0; i<lines.length;i++){        
    numArray.push(parseInt(lines[i]))
    if (numArray[i]%2 == 0 ){
        numArray.splice(i,1,0)
    }
}
console.log(numArray)
*/
const changeNumber = () => {
    if ( lines.length === 0) {
        return -1
    };
    for (let i=0; i<lines.length;i++){        
        numArray.push(parseInt(lines[i]))
        if (numArray[i]%2 == 0 ){
            numArray.splice(i,1,0)
        }
    }
    console.log(numArray)
}

changeNumber(lines);