const firstNum = 0;
const secondNum = 0;
const operator = "+";
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

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
        return add(a,b);
    }

    else if (op === "-") {
        return subtract(a,b);
    }

    else if (op === "*") {
        return multiply(a,b);
    }

    else {
        return divide(a,b);
    }
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (button.value === "clear") {
            display.textContent = 0;
        }

        else if (button.value === "equals") {
            let items = display.textContent.split(" ");
            let soln = operate(items[1], Number(items[0]), Number(items[2]));
            display.textContent = soln;
        }

        else if (button.value === "operator") {
            display.textContent += " " + button.textContent + " ";
        }

        else if (display.textContent == 0) {
            display.textContent = button.textContent;
        }

        else {
            display.textContent += button.textContent;
        }
    });
});

