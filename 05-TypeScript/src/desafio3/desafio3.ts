let buttonAtualizar = document.getElementById('atualizar-saldo');
let buttonLimpar = document.getElementById('limpar-saldo');
let sum = document.getElementById('soma')! as HTMLInputElement;
let fieldBalance = document.getElementById('campo-saldo');

let totalBalance = 0;

clearBalance();

function addToBalance(sum: number) {
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
  buttonLimpar.addEventListener("click", () => {
    clearBalance();
  });
}

if (buttonAtualizar) {
  buttonAtualizar.addEventListener("click", () => {
    addToBalance(Number(sum.value));
  });
}
