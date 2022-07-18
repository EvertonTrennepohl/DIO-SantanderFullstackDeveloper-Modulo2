const pessoa1 = {
  nome: "Maria",
  idade: 82,
};

const pessoa2 = {
  nome: "João",
  idade: 52,
};

const pessoa3 = {
  nome: "Miguel",
  idade: 5,
};

const pessoa4 = {
  nome: "Marcos",
  idade: 47,
};

function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}

console.log(calculaIdade.call(pessoa1, 10));

console.log(calculaIdade.apply(pessoa3, [5]));

console.log(calculaIdade.call(pessoa2, 20));

console.log(calculaIdade.apply(pessoa4, [20]));
