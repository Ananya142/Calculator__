
const display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function invertSign() {
  if (display.value) {
    display.value = (parseFloat(display.value) * -1).toString();
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

function square() {
  if (display.value) {
    display.value = Math.pow(parseFloat(display.value), 2);
  }
}

function squareRoot() {
  if (display.value) {
    const result = Math.sqrt(parseFloat(display.value));
    display.value = isNaN(result) ? 'Error' : result;
  }
}

function reciprocal() {
  if (display.value) {
    const value = parseFloat(display.value);
    display.value = value !== 0 ? (1 / value).toString() : 'Error';
  }
}

function percentage() {
  if (display.value) {
    display.value = (parseFloat(display.value) / 100).toString();
  }
}
