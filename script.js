const firstNum = 0;
const secondNum = 0;
const operator = "+";

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(op, a, b) {
    if (op === "+") {
        multiply(a,b);
    }

    else if (op === "-") {
        subtract(a,b);
    }

    else if (op === "*") {
        multiply(a,b);
    }

    else {
        divide(a,b);
    }
}

