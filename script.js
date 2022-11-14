var firstValue = null;
var secondValue = null;
var selectedOperation = null;
var inputNumber = document.getElementById("input-number");

function setValue(value) {

    inputNumber.value = inputNumber.value + String(value);
    console.log(value);
}

function setOperation(operation) {
    clearInput();

    selectedOperation = operation;

    switch (operation) {
        case "/":
            
            break;
    }
    selectedOperation = operation;

}

function clearInput() {
    inputNumber.value = "";
}

function calculate() {
    switch (selectedOperation) {
        case "/":
            
            break;
    }
}