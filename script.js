const firstNum = 0;
const secondNum = 0;
const operator = "+";
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const clear = document.querySelector('button[type="clear"]');
const equals = document.querySelector('button[type="equals"]');
const operators = document.querySelectorAll('button[type="operator"]');
const digits = document.querySelectorAll('button[type="digit"]');
let items = [];

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
        return b != 0 ? divide(a, b) : "ERROR!";
    }
}

clear.addEventListener('click', function() {
    display.textContent = 0;
    items.splice(0, items.length);
});

equals.addEventListener('click', function() {
    if (items.length >= 3) {
        let soln = operate(items[1], Number(items[0]), Number(items[2]));

        if (!Number.isInteger(soln) && !(typeof soln === 'string')) {
            soln = soln.toFixed(7);
        }

        display.textContent = soln;
        items.splice(0, items.length);

        //TODO: if pressed operator after, will get NaN...
        if (!(typeof soln === 'string')) {
            items.push(soln);
        }
    }
});

operators.forEach(operator => {
    operator.addEventListener('click', function() {
        items.push(operator.textContent);

        if (items.length >= 3) {
            let soln = operate(items[1], Number(items[0]), Number(items[2]));
            
            if (!Number.isInteger(soln)) {
                soln = soln.toFixed(7);
            }

            display.textContent = soln;
            items.splice(0, items.length);
            items.push(soln, operator.textContent);
        }

        display.textContent += " " + operator.textContent + " ";
    });
});

digits.forEach(digit => {
    digit.addEventListener('click', function() {
        items.push(digit.textContent);

        // if digit and display is 0 or some other digit after an operation
        //TODO: replace number in display if previous operation is equals
        if (display.textContent == 0) {
            display.textContent = digit.textContent;
        }

        // if digit and display is some digits inputted by user
        else {
            display.textContent += digit.textContent;
        }
    });
});
