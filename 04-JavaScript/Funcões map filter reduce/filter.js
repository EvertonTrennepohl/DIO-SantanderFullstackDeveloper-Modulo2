const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 23, 25, 26];

function filtraPares(arr) {
    return arr.filter((item)=> item % 2 === 0);
}

console.log('Array -> ', numeros);
console.log('Somente pares -> ', filtraPares(numeros));