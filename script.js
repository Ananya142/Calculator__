const display = document.getElementById('display');
let memory = 0;

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

function percentage() {
  if (display.value) {
    display.value = (parseFloat(display.value) / 100).toString();
  }
}

// Scientific Functions
function sin() {
  if (display.value) {
    const value = parseFloat(display.value);
    display.value = Math.sin(value * Math.PI / 180); // Convert to degrees
  }
}

function cos() {
  if (display.value) {
    const value = parseFloat(display.value);
    display.value = Math.cos(value * Math.PI / 180);
  }
}

function tan() {
  if (display.value) {
    const value = parseFloat(display.value);
    display.value = Math.tan(value * Math.PI / 180);
  }
}

function log() {
  if (display.value) {
    const value = parseFloat(display.value);
    display.value = value > 0 ? Math.log10(value) : 'Error';
  }
}

function ln() {
  if (display.value) {
    const value = parseFloat(display.value);
    display.value = value > 0 ? Math.log(value) : 'Error';
  }
}

function exp() {
  if (display.value) {
    const value = parseFloat(display.value);
    display.value = Math.exp(value);
  }
}

function power() {
  appendToDisplay('**');
}

function pi() {
  appendToDisplay(Math.PI.toString());
}

function e() {
  appendToDisplay(Math.E.toString());
}

function factorial() {
  if (display.value) {
    const value = parseInt(display.value);
    if (value >= 0 && value <= 170) {
      display.value = factorialCalc(value);
    } else {
      display.value = 'Error';
    }
  }
}

function factorialCalc(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorialCalc(n - 1);
}

function square() {
  if (display.value) {
    const value = parseFloat(display.value);
    display.value = Math.pow(value, 2);
  }
}

function squareRoot() {
  if (display.value) {
    const value = parseFloat(display.value);
    const result = Math.sqrt(value);
    display.value = isNaN(result) ? 'Error' : result;
  }
}

// Memory Functions
function memoryClear() {
  memory = 0;
}

function memoryRecall() {
  display.value = memory.toString();
}

function memoryStore() {
  if (display.value) {
    memory = parseFloat(display.value);
  }
}

function memoryAdd() {
  if (display.value) {
    memory += parseFloat(display.value);
  }
}

// Keyboard Support
document.addEventListener('keydown', function(event) {
  const key = event.key;

  if (key >= '0' && key <= '9') {
    appendToDisplay(key);
  } else if (key === '.') {
    appendToDisplay('.');
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    appendToDisplay(key);
  } else if (key === 'Enter' || key === '=') {
    calculate();
  } else if (key === 'Backspace') {
    backspace();
  } else if (key === 'Escape') {
    clearDisplay();
  } else if (key === 'c' || key === 'C') {
    clearDisplay();
  }
});
