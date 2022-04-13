var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split(' ').map(Number);

var [A, B, C] = lines;

var areaTrapezio = ((A+B)*C)/2;

    if(A + B > C && A + C > B && B + C > A){
        var perimetro = A + B + C;
        console.log(`Perimetro = ` + perimetro.toFixed(1));
    }else {
        console.log(`Area = ` + areaTrapezio.toFixed(1));
    }
     