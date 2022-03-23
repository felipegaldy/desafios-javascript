class contaBancaria {
    constructor (agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo
    }
    set saldo(valor){
        this._saldo = valor; 
    }
// Dentro de `ContaBancaria`, crie os métodos `sacar` e `depositar`;
    sacar(valor){
        if(this.valor > this._saldo) throw RangeError('Saldo Insuficiente');

        this._saldo -= valor
        return this._saldo; 
    }
    depositar(valor) {
        this._saldo += valor
        
        return this._saldo
    }
}

class contaCorrente extends contaBancaria {
    
    constructor(agencia, numero, saldo, cartaoCredito){
    super(agencia, numero, saldo);
    this.cartaoCredito = cartaoCredito
    this.tipo = 'corrente';
    }
    get cartaoCredito() {
        return this.cartaoCredito
    }
    set cartaoCredito(valor){
        return this.cartaoCredito = valor
    }
}

class contaPoupanca extends contaBancaria {
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = 'poupanca'
    }

}

class contaUniversitaria extends contaBancaria {
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = 'universitaria'
    }
    sacar(valor) {
        if(valor > 500) {
            return 'Solicite um valor menor que 500R$'
        }
        this._saldo -= valor
        return this._saldo
    }
}