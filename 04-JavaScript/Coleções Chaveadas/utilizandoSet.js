let numeros = [30, 30, 50, 31, 50, 45, 3003, 31, 50, 3003, 5, 5];

function valoresUnicos(lista) {
    let unicos = new Set(lista);

    //Dessa forma retorna um Set
    //return unicos;

    //Utilizando argumento rest. Desmembra cada item do Set e adiciona em um novo array.
    return [...unicos];
}

console.log(valoresUnicos(numeros));