let num1 = '';
let num2 = '';
let op = "";
let currNum = '';
let equalPressed = false;
const display = document.querySelector('.display');
const clear = document.querySelector('button[type="clear"]');
const equals = document.querySelector('button[type="equals"]');
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
    return b != 0 ? a / b : "error!";
}

function operate(op, a, b) {
    let result = '';
    if (op === "+") {
        result = add(a,b);
    }

    else if (op === "-") {
        result = subtract(a,b);
    }

    else if (op === "*") {
        result = multiply(a,b);
    }

    else {
        result = divide(a,b);
    }

    if (!Number.isInteger(result) && !(typeof result === 'string')) {
        result = result.toFixed(7);
    }

    return result;
}

clear.addEventListener('click', function() {
    display.textContent = 0;
    num1 = 0;
    num2 = 0;
    op = '';
});

equals.addEventListener('click', function() {
    if (!num2) {
        num2 = Number(currNum);
        currNum = '';
    }

    if (num1 && op && num2) {
        num1 = operate(op, Number(num1), Number(num2));
        display.textContent = num1;
        num2 = '';
        op = '';
        equalPressed = true;
    }
});

operators.forEach(operator => {
    operator.addEventListener('click', function() {
        if (!num1) {
            num1 = Number(currNum);
            display.textContent += operator.textContent;
            currNum = '';
        }

        else if (!num2 && !equalPressed) {
            num2 = Number(currNum);
            num1 = operate(op, Number(num1), Number(num2));
            display.textContent = num1+operator.textContent;
            num2 = '';
            currNum = '';
        }

        else if (equalPressed) {
            display.textContent += operator.textContent;
            equalPressed = false;
        }

        op = operator.textContent;
    });
});

digits.forEach(digit => {
    digit.addEventListener('click', function() {
        if (display.textContent == 0 || equalPressed) {
            display.textContent = digit.textContent;
            equalPressed = false;
            num1 = '';
            num2 = '';
            currNum = '';
            op = '';
        }

        else {
            display.textContent += digit.textContent;
        }

        currNum += digit.textContent;
    });
});