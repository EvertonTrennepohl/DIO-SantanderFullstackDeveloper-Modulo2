const prices = [2.45, 10.69, 20.99, 45.89];

const money = 100.00;

//Somando todos os itens do array utilizando o método reduce
function sumNumbers(myArray) {
    console.log('Somando os valores do array...')
    return myArray.reduce(function (prev, current) {
        console.log({ prev });
        console.log({ current });
        return prev + current;
    }, 0);
}
console.log('Soma dos valores do array -> ', sumNumbers(prices));

//Somando todos os números de um array utilizando o método reduce com arrow function
function sumNumbersArrowFunction(myArray) {
    return myArray.reduce((prev, current) => prev + current)
}
console.log('\nSoma dos valores do array (arrow function) -> ', sumNumbersArrowFunction(prices));

//Subtraindo cada item do array do valor 100 utilizando o método reduce
function reducePrecos(balance, myArray) {
    console.log('\nSubtraindo os valores do array do valor 100...');
    return myArray.reduce(function (prev, current) {
        console.log({ prev });
        console.log({ current });
        return prev - current
    }, balance);
}
console.log('Subtração dos valores do array de 100 ->', reducePrecos(money, prices));

