var frase = "invertendo string"

var quebraFrase = frase.split("");
var novaFrase = [];
for(let i = quebraFrase.length-1; i >= 0; i--){
    novaFrase.push(quebraFrase[i]);
}

console.log(novaFrase.join(" "));