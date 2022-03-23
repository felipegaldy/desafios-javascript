


function calculaIdade(anos) {

	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
const pessoa1 = {
    nome: 'Felipe',
    idade: 28
}
const pessoa2 = {
    nome: 'Nayara',
    idade: 22
}
console.log(calculaIdade.call(pessoa1, 7))