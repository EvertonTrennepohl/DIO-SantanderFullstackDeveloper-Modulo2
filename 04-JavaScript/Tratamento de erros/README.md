TRATAMENTO DE ERROS

Atividade: Validação de erros por tipo

O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro da função.
Caso contrário um erro será lançado.

    1- Crie uma função que receba um array e um número;
    2- Realize as seguintes validações:
        * Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError;
        * Se o array não for do tipo 'object', lance um erro do tipo TypeError;
        * Se o número não for do tipo 'number', lance um erro do tipo TypeError;
        * Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError;
    3- Utilize declaração try...catch;
    4- Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof.