var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split(' ');


var A = parseInt(lines.shift());
var B = parseInt(lines.shift());

if(B%A == 0 || A%B == 0){
    console.log('Sao Multiplos')
}else {
    console.log('Nao sao Multiplos')
}
