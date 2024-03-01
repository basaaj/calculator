let num1 = '';                      // first number for operation
let num2 = '';                      // second number for operation
let op = "";                        // operator
let currNum = '';                   // current number user is inputting
let equalPressed = false;           // checks if user has pressed equals button
const errorMsg = "error :(";        // error message
const display = document.querySelector('#display');
const clear = document.querySelector('button[value="clear"]');
const equals = document.querySelector('button[value="equals"]');
const operators = document.querySelectorAll('button[type="operator"]');
const digits = document.querySelectorAll('button[type="digit"]');

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
    return b != 0 ? a / b : errorMsg;
}

function operate(op, a, b) {
    let result = '';
    switch(op) {
        case '+':
            result = add(a,b);
            break;
        case '-':
            result = subtract(a,b);
            break;
        case '*':
            result = multiply(a,b);
            break;
        case '/':
            result = divide(a,b);
            break;
    }

    // Round result if applicable
    if (!Number.isInteger(result) && !(typeof result === 'string')) {
        result = result.toFixed(7);
    }

    return result;
}

function clearVars() {
    num1 = 0;
    num2 = 0;
    currNum = '';
    op = '';
    equalPressed = false;
}

function updateOp(operator) {
    display.textContent += operator.textContent;
    op = operator.textContent;
}

clear.addEventListener('click', function() {
    display.textContent = 0;
    clearVars();
});

equals.addEventListener('click', function() {
    if (!num2) {
        num2 = Number(currNum);
        currNum = '';
    }

    // If we have proper operands and operator, calculate and display result
    if (typeof num1 === 'number' && op && typeof num1 === 'number') {
        num1 = operate(op, num1, num2);
        display.textContent = num1;

        if (num1 != errorMsg) {
            num1 = Number(num1);
        }

        num2 = '';
        op = '';
        equalPressed = true;
    }
});

operators.forEach(operator => {
    operator.addEventListener('click', function() {
        if (display.textContent !== errorMsg) {
            if (!num1) {
                num1 = Number(currNum);
                updateOp(operator);
                currNum = '';
            }
    
            else if (!num2 && !equalPressed) {
                num2 = Number(currNum);
                num1 = operate(op, num1, num2);
                display.textContent = num1;

                if (num1 != errorMsg) {
                    num1 = Number(num1);
                    updateOp(operator);
                }

                num2 = '';
                currNum = '';
            }
    
            else if (equalPressed) {
                updateOp(operator);
                equalPressed = false;
            }
        }
    });
});

digits.forEach(digit => {
    digit.addEventListener('click', function() {
        if (display.textContent == 0 || display.textContent == errorMsg || equalPressed) {
            display.textContent = digit.textContent;
            clearVars();
        }

        else {
            display.textContent += digit.textContent;
        }

        currNum += digit.textContent;
    });
});