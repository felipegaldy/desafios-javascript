var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split('\n')

const str = 'hallo d   é world';
let regex = /[á-ùÁ-ÙA-Z@!#$%^&*?;|§ªº°~´`¬><"'+=()/\\]/g.test(str);
if(regex){
    console.log('mensagem inválida')
}else {
    console.log('mensagem valida')
}