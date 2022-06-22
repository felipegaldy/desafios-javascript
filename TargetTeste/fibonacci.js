var num1=0, num2=1, num3=0, valor;
//digite o valor para testar
valor = 44;
while (valor > num3) {
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
}
if (valor == 0) {
    console.log("O numero faz parte da sequência de Fibonacci e o próximo número é 1");
}else if(valor == num3) {
    console.log("O numero faz parte da sequência de Fibonacci e o próximo número é "+ (valor +num1));
}else {
    console.log("O numero não faz parte da sequência de Fibonacci");
}