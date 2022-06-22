const DADOS_FATURAMENTO = require('fs').readFileSync('dados.json','utf8');
const DADOS = JSON.parse(DADOS_FATURAMENTO);//transformando json em objeto

//declarando variaveis para obter os resultados
var menor=DADOS[0].valor, maior=0, media=0, diasAcimaMedia=0, dias=0;

//percorrendo dados 
for(let i=0; i < DADOS.length; i++){
    //verificação de dia com faturamento
    if(DADOS[i].valor != 0 ){
        media += DADOS[i].valor;//adicionando valores a media
        dias++;//contando dias com faturamento
        if(DADOS[i].valor < menor){//encontrando o menor valor
            menor = DADOS[i].valor;
        }
        if(DADOS[i].valor > maior){//encontrando o maior valor
            maior = DADOS[i].valor;
        }
    }
}
media = (parseFloat(media) / parseInt(dias)).toFixed(4)
console.log("A média de faturamento foi: R$"+ media);
console.log("O menor valor arrecadado foi: R$"+ menor.toFixed(4));
console.log("O maior valor arrecadado foi: R$"+ maior.toFixed(4));
//contar dias acima da medi
for(let i=0; i< DADOS.length; i++){
    if(DADOS[i].valor != 0 && DADOS[i].valor > media ){
        diasAcimaMedia++
    }
}
console.log("Quantidade de dias acima da media: "+ diasAcimaMedia+" dia(s)");