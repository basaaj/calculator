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
        return divide(a,b);
    }
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (button.value === "clear") {
            display.textContent = 0;
            items.splice(0, items.length);
        }

        else if (button.value === "equals") {
            let soln = operate(items[1], Number(items[0]), Number(items[2]));

            if (!Number.isInteger(soln)) {
                soln = soln.toFixed(7);
            }

            display.textContent = soln;
            items.splice(0, items.length);
            items.push(soln);
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
                console.log("bonk");
            }

            display.textContent += " " + button.textContent + " ";
        }

        else if (display.textContent == 0) {
            items.push(button.textContent);
            display.textContent = button.textContent;
        }

        else {
            items.push(button.textContent);
            display.textContent += button.textContent;
        }
    });
});
