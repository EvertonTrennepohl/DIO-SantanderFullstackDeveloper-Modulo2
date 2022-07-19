class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if(valor <= this._saldo) {
            this._saldo = this._saldo - valor;
            return this._saldo;
        } else{
            return "Saldo insuficiente";
        }
    }

    depositar(valor) {
        if(valor > 0) {
            this._saldo = this._saldo + valor;
            return this._saldo;
        } else {
            return "Valor inválido";
        }
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = "Conta Corrente";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = "Conta Poupança"
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = "Conta Universitária";
    }

    sacar(valor) {
        if(valor <= 500) {
            super.sacar(valor);
            return valor;
        } else {
            return "Valor excede o limite de saque!";
        }
    }
}