var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split(' ').map(Number);

lines.sort((a,b) => b-a);

var [A, B, C] = lines;
var A = parseFloat(A);
var B = parseFloat(B);
var C = parseFloat(C);

if(A >= (B+C)){
    console.log('NAO FORMA TRIANGULO')
} else {
    tiposTriangulo();
}

function tiposTriangulo() {
    if(A*A == (B**2+C**2)){
        console.log('TRIANGULO RETANGULO')
    }
    if(A*A > (B**2+C**2)){
        console.log('TRIANGULO OBTUSANGULO')
    }
    if(A*A < (B**2+C**2)){
        console.log('TRIANGULO ACUTANGULO')
    }
    if(A == B && A == C){
        console.log('TRIANGULO EQUILATERO')
    }else if(A == B || A == C || B == C){
        console.log('TRIANGULO ISOSCELES')
    }  
}
