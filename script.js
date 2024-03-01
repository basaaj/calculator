let num1 = '';
let num2 = '';
let op = "";
let currNum = '';
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
    }
});

operators.forEach(operator => {
    operator.addEventListener('click', function() {
        if (!num1) {
            num1 = Number(currNum);
            op = operator.textContent;
            display.textContent += operator.textContent;
            currNum = '';
        }

        else if (!num2) {
            num2 = Number(currNum);
            num1 = operate(op, Number(num1), Number(num2));
            op = operator.textContent;
            display.textContent = num1+operator.textContent;
            num2 = '';
            currNum = '';
        }
    });
});

digits.forEach(digit => {
    digit.addEventListener('click', function() {
        if (display.textContent == 0) {
            display.textContent = digit.textContent;
        }

        else {
            display.textContent += digit.textContent;
        }

        currNum += digit.textContent;
    });
});