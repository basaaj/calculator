const firstNum = 0;
const secondNum = 0;
const operator = "+";
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
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

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (button.value === "clear") {
            display.textContent = 0;
            items.splice(0, items.length);
        }

        else if (button.value === "equals" && items.length >= 3) {
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

        else if (button.value === "operator") {
            items.push(button.textContent);

            if (items.length >= 3) {
                let soln = operate(items[1], Number(items[0]), Number(items[2]));
                
                if (!Number.isInteger(soln)) {
                    soln = soln.toFixed(7);
                }

                display.textContent = soln;
                items.splice(0, items.length);
                items.push(soln, button.textContent);
            }

            display.textContent += " " + button.textContent + " ";
        }

        else if (display.textContent == 0 && button.value !== "equals") {
            items.push(button.textContent);
            display.textContent = button.textContent;
        }

        else if (button.value !== "equals") {
            items.push(button.textContent);
            display.textContent += button.textContent;
        }
    });
});
