

var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split(' ')

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

const delta = Math.pow(B, 2) - 4*A*C;


const bhaskara = () => {
    if (delta <= 0 || A === 0) {
        console.log("Impossivel calcular");
    } else {
    let x1 = (-(B) + Math.sqrt(delta))/(2*A);
    let x2 = (-(B) - Math.sqrt(delta))/(2*A);
    let res1 = parseFloat(x1).toFixed(5)
    let res2 = parseFloat(x2).toFixed(5)     
    console.log(`R1 = ${res1}`)
    console.log(`R2 = ${res2}`)    
    
    }

};

bhaskara();