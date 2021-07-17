let displayValue = [];
let storedValue = 0;
let storedOperator = "";
let firstDigit = "";

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
        displayValue = displayValue.join("");
        displayValue = Number(displayValue);
        storedValue = operate(storedValue, storedOperator, displayValue);
        calclulatorDisplay.innerHTML = storedValue;
        storedOperator = operator;
    } else {
        storedOperator = operator;
        displayValue = displayValue.join("");
        storedValue = Number(displayValue);
        displayValue = [];
        calclulatorDisplay.innerHTML = defaultDisplayValue;
    }        
}

const getDisplayValue = function(input) {
    if(typeof(displayValue) === "number") {
        resetDisplay();
    }
    if(input==="0" && displayValue.length===0) {
        calclulatorDisplay.innerHTML = defaultDisplayValue;
    } else {
        displayValue.push(input);
        displayValue = displayValue.join("");
        calclulatorDisplay.innerHTML = displayValue;
        displayValue = displayValue.split(",");
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
        case "+/-":
            if(displayValue[0] === "-") {
                displayValue.shift();
            } else {
                displayValue.unshift("-");
            } 
            getDisplayValue(""); 
            break;

        case "=":
            displayValue = displayValue.join();
            displayValue = Number(displayValue);
            storedValue = operate(storedValue, storedOperator, displayValue);
            displayValue = storedValue;
            calclulatorDisplay.innerHTML = displayValue;
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