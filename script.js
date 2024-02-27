const firstNum = 0;
const secondNum = 0;
const operator = "+";
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const displayValue = display.textContent;

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

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (button.value === "clear") {
            display.textContent = 0;
        }

        else if (display.textContent == 0) {
            display.textContent = button.textContent;
        }

        else {
            display.textContent += button.textContent;
        }
    });
});

