const add = function(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

const subtract = function(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

const multiply = function(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

const divide = function(firstNumber, secondNumber) {
    if(secondNumber === 0) {
        return "NO!";
    }
    return firstNumber / secondNumber;
}

const operate = function(firstNumber, operator, secondNumber) {
    switch(operator) {
        case "+":
            return add(firstNumber, secondNumber);
            break;
        case "-":
            return subtract(firstNumber, secondNumber);
            break;
        case "*":
            return multiply(firstNumber, secondNumber);
            break;
        case "/":
            return multiply(firstNumber, secondNumber);
            break; // in the event that more switch statements must be added in the future
    }
}