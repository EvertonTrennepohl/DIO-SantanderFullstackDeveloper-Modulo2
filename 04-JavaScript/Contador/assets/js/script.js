var currentNumber =  document.getElementById("currentNumber");
var currentValue = 0;

function decrement() {
    currentValue = currentValue - 1;
    currentNumber.innerHTML = currentValue;
}

function increment() {
    currentValue = currentValue + 1;
    currentNumber.innerHTML = currentValue;
}