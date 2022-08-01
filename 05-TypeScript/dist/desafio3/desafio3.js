"use strict";
var buttonAtualizar = document.getElementById('atualizar-saldo');
var buttonLimpar = document.getElementById('limpar-saldo');
var sum = document.getElementById('soma');
var fieldBalance = document.getElementById('campo-saldo');
var totalBalance = 0;
clearBalance();
function addToBalance(sum) {
    if (fieldBalance) {
        totalBalance += sum;
        fieldBalance.innerHTML = totalBalance.toString();
        clearFieldSum();
    }
}
function clearFieldSum() {
    sum.value = "";
}
function clearBalance() {
    if (fieldBalance) {
        totalBalance = 0;
        fieldBalance.innerHTML = totalBalance.toString();
    }
}
if (buttonLimpar) {
    buttonLimpar.addEventListener("click", function () {
        clearBalance();
    });
}
if (buttonAtualizar) {
    buttonAtualizar.addEventListener("click", function () {
        addToBalance(Number(sum.value));
    });
}
//# sourceMappingURL=desafio3.js.map