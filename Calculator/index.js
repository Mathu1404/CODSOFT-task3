const inputBox = document.querySelector('.inputBox');

function updateDisplay(value) {
    inputBox.value += value;
}


function clearInput() {
    inputBox.value = '';
}

function deleteLastCharacter() {
    inputBox.value = inputBox.value.slice(0, -1);
}
function calculatePercentage() {
    inputBox.value = (parseFloat(inputBox.value) / 100).toString();
}


function appendNumber(number) {
    updateDisplay(number);
}


function appendOperator(operator) {
    updateDisplay(` ${operator} `); 
}


function calculateResult() {
    try {
        
        inputBox.value = new Function('return ' + inputBox.value)();
    } catch (error) {
        inputBox.value = 'Error';
    }
}
