let displayValue = ["0"];
let storedValue = 0;
let storedOperator = "";

const calclulatorDisplay = document.querySelector(".display-value");
const calculatorButtons = document.querySelectorAll("button");

const add = function(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
};

const multiply = function(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
};

const divide = function(firstNumber, secondNumber) {
    if(secondNumber === 0) {
        return "NO!";
    };
    return firstNumber / secondNumber;
};

const operate = function(firstNumber, operator, secondNumber) {
    switch(operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);     
    };       
};

const getDisplayValue = function(input) {
    if(typeof(displayValue)==="string") {
        displayValue.split("");
    };    
    displayValue.push(input);
    calclulatorDisplay.innerHTML = displayValue.join("");
}

const calculatorInput = function(input) {
    switch(input) {
        case "AC":
            console.log("clear");
            break;
        case "+": case "-": case "*": case "/":
            console.log("operator");
            break;
        default:
            getDisplayValue(input);
    }
}

const activateCalculatorValues = function() {    
    calculatorButtons.forEach(calculatorButton => {
        calculatorButton.addEventListener("click", () => {
            calculatorInput(calculatorButton.innerHTML);
        });
    });
};


activateCalculatorValues();
calclulatorDisplay.innerHTML = displayValue;