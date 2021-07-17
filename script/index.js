let displayValue = [];
let storedValue = 0;
let storedOperator = "";

const defaultDisplayValue = 0;
const calclulatorDisplay = document.querySelector(".display-value");
const calculatorButtons = document.querySelectorAll("button");

const add = function(firstNumber, secondNumber) {
    return firstNumber + secondNumber
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

const resetDisplay = function() {
    displayValue = [];
    storedValue = 0;
    storedOperator = "";
    calclulatorDisplay.innerHTML = defaultDisplayValue;
}

const storeValues = function(operator) {
    if(displayValue === []) {
        return;
    } else if(storedOperator != "") {
        displayValue = parseInt(displayValue, 10);
        storedValue = operate(storedValue, storedOperator, displayValue);
        calclulatorDisplay.innerHTML = storedValue;
        storedOperator = operator;
    } else {
        storedOperator = operator;
        storedValue = parseInt(displayValue, 10);
        displayValue = [];
        calclulatorDisplay.innerHTML = defaultDisplayValue;
    }        
}

const getDisplayValue = function(input) {
    if(input==="0" && displayValue.length===0) {
        calclulatorDisplay.innerHTML = defaultDisplayValue;
    } else {
        if(typeof displayValue === "string") {
            displayValue = displayValue.split();
            console.log(typeof displayValue);
        }
        displayValue.push(input);
        displayValue = displayValue.join("");
        calclulatorDisplay.innerHTML = displayValue;
        console.log(displayValue);
        console.log(typeof(displayValue));
    }
}

const calculatorInput = function(input) {
    switch(input) {
        case "AC":
            resetDisplay();
            break;
        case "+": case "-": case "*": case "/":
            storeValues(input);
            break;
        case "=":
            displayValue = parseInt(displayValue, 10);
            storedValue = operate(storedValue, storedOperator, displayValue);
            calclulatorDisplay.innerHTML = storedValue;
            storedOperator = "";
            break;
        default:
            getDisplayValue(input);
    };
};

const activateCalculatorValues = function() {    
    calculatorButtons.forEach(calculatorButton => {
        calculatorButton.addEventListener("click", () => {
            calculatorInput(calculatorButton.innerHTML);            
        });
    });
};


activateCalculatorValues();
resetDisplay();