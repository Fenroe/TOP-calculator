let displayValue = [];
let storedValue = 0;
let storedOperator = "";
let recentlyCalculated = false;

const displayMaxLength = 9;
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
    secondNumber = secondNumber.join("");
    secondNumber = Number(secondNumber);
    switch(operator) {
        case "+":
            secondNumber = add(firstNumber, secondNumber);
            break;
        case "-":
            secondNumber = subtract(firstNumber, secondNumber);
            break;
        case "*":
            secondNumber = multiply(firstNumber, secondNumber);
            break;
        case "/":
            secondNumber = divide(firstNumber, secondNumber);  
            break;   
    }; 
    secondNumber = String(secondNumber);
    secondNumber = secondNumber.split(","); 
    return secondNumber;    
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
        displayValue = operate(storedValue, operator, displayValue);
        getDisplayValue("");
        storedOperator = operator;
    } else {
        storedOperator = operator;
        displayValue = displayValue.join("");
        storedValue = Number(displayValue);
        displayValue = [];
        calclulatorDisplay.innerHTML = defaultDisplayValue;
        recentlyCalculated = false;
    }        
}

const getDisplayValue = function(input) {
    if(input==="0" && displayValue.length===0) {
        calclulatorDisplay.innerHTML = defaultDisplayValue;
    } else {
        if(recentlyCalculated === true) {
            resetDisplay();
            recentlyCalculated = false;
        }
        displayValue.push(input);
        displayValue = displayValue.join("");
        displayValue = Array.from(displayValue);   
        if(displayValue.length > displayMaxLength) {
            for(i = displayValue.length; i > displayMaxLength; i--) {
            displayValue.pop();
            }
        }
        displayValue = displayValue.join("");
        calclulatorDisplay.innerHTML = displayValue;
        displayValue = Array.from(displayValue);      
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
        case "DEL":
            displayValue.pop();
            getDisplayValue("");

        case "=":
            displayValue = operate(storedValue, storedOperator, displayValue);
            getDisplayValue("");
            storedOperator = "";
            storedValue = 0;
            recentlyCalculated = true;
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