

const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const clearButton = document.getElementById('clear');
const countDisplay = document.getElementById('count-display');
const errorMessage = document.getElementById('error-message');

let count = 0;

incrementButton.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decrementButton.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateDisplay();
    } else {
        errorMessage.style.display = 'block';
    }
});

clearButton.addEventListener('click', () => {
    count = 0;
    updateDisplay();
    clearButton.style.display = 'none';
});

function updateDisplay() {
    countDisplay.innerHTML = count;
    errorMessage.style.display = 'none';

    if (count > 0) {
        clearButton.style.display = 'block';
    } else {
        clearButton.style.display = 'none';
    }
}