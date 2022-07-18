const numeros = [1, 2, 3, 4, 5, 6];
const t = 6;
function validaTamanho(myArray, tamanho) {
  try {
    if (!myArray && !tamanho) {
      throw new ReferenceError("Envie os parâmetros");
    }
    if (typeof myArray !== "object") {
      throw new TypeError("O array não é do tipo object");
    }
    if (typeof tamanho !== "number") {
      throw new TypeError("O parâmetro tamanho não é do tipo number");
    }
    if (myArray.length !== tamanho) {
      throw new RangeError("Tamanho do array diferente do tamanho informado");
    }
    
    return myArray;
    
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log(e.name);
      console.log(e.stack);
    } else if (e instanceof TypeError) {
      console.log(e.name);
      console.log(e.stack);
    } else if (e instanceof RangeError) {
      console.log(e.name);
      console.log(e.stack);
    } else {
      console.log("Tipo de erro não esperado:" + e);
    }
  }
}

validaTamanho(numeros, 9);

validaTamanho("a", 6);

validaTamanho(numeros, "a");

validaTamanho(numeros, 4);

console.log("\n", validaTamanho(numeros, 6));
