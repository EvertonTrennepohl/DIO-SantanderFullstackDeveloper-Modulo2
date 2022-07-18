// O método map pode ser utilizado para fazer uma operação com todos os elementos de um array

const laranja = {
    value: 4
}

const uva = {
    value: 3
}

//map utilizando function com this
function mapComThis(arr, thisArgs) {
    return arr.map(function(item) {
        return item * this.value;
    }, thisArgs);
}

const numeros = [2, 4, 6, 8, 9];

console.log('this -> laranja = ', mapComThis(numeros, laranja));

console.log('this -> uva = ', mapComThis(numeros, uva));

//map utilizando arrow function sem this
function mapSemThis(arr) {
    return arr.map((item) => item * 2);
}

console.log('Sem this -> ', mapSemThis(numeros))

//O método map não altera o array original
console.log('Array original -> ', numeros);