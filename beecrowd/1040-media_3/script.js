var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split(' ')

var n1 = parseFloat(lines.shift())
var n2 = parseFloat(lines.shift())
var n3 = parseFloat(lines.shift())
var n4 = parseFloat(lines.shift())
var media = parseFloat((((n1*2)+(n2*3)+(n3*4)+(n4*1))/10));


const calcMedia = () => {

    console.log("Media: " + media.toFixed(1))
    if (media >= 7.0){
        console.log("Aluno aprovado.")
    }else if (media < 5.0) {
        console.log("Aluno reprovado.")
    }else if (media >= 5.0 && media <= 6.9) {
        console.log("Aluno em exame.")
        alunoExame();
    }
}
const alunoExame = () => {
    var exame = input.split('\n');
    var notas = exame.shift();
    var result = parseFloat(exame.shift());
    media = ((media+result)/2).toFixed(1);
    console.log("Nota do exame: " + result.toFixed(1));
    if (media > 5.0){
        console.log("Aluno aprovado.");
        
    }else {
        console.log("Aluno reprovado.");
    }
    console.log("Media final: " + parseFloat(media).toFixed(1))

}
calcMedia();