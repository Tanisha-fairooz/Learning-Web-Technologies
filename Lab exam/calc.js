const container = document.getElementById('calculator');


const display = document.createElement('input');
display.type = 'text';
display.readOnly = true;
container.appendChild(display);
container.appendChild(document.createElement('br'));


const buttonRows = [
  ['1', '2', '3', '4'],
  ['5', '6', '7', '8'],
  ['9', '0', '.', '%'],
  ['+', '-', '*', '/ '],
  ['C', '=']
];


let expression = '';

function handleClick(value) {

  // Check if the value is a number or a valid character
  if (!isNaN(value) || value === '.') {
  
    if (expression === 'Error') expression = '';
    expression += value;
    display.value = expression;
  }
  // Handle the '+' operator
  else if (value === '+') {
    if (expression === 'Error') expression = '';
    expression += '+';
    display.value = expression;
  }
  // Handle the '-' operator
  else if (value === '-') {
    if (expression === 'Error') expression = '';
    expression += '-';
    display.value = expression;
  }
  // Handle the '*' operator
  else if (value === '*') {
    if (expression === 'Error') expression = '';
    expression += '*';
    display.value = expression;
  }
  // Handle the '/' operator
  else if (value === '/') {
    if (expression === 'Error') expression = '';
    expression += '/';
    display.value = expression;
  }
  // Handle the '%' operator
  else if (value === '%') {
    if (expression === 'Error') expression = '';
    expression += '%';
    display.value = expression;
  }
  // Handle the 'C' button (clear)
  else if (value === 'C') {
    expression = '';
    display.value = '';
  }
  // Handle the '=' button (evaluate)
  else if (value === '=') {
    try {
      const finalExpr = expression.replace(/%/g, '/100'); // interpret % as percentage
      const result = Function('"use strict"; return (' + finalExpr + ')')();
      display.value = result;
      expression = result.toString(); // allow further chaining
    } catch {
      display.value = 'Error';
      expression = 'Error';
    }
  }
}

buttonRows.forEach(row => {
  row.forEach(char => {
    const btn = document.createElement('button');
    btn.textContent = char;
    btn.addEventListener('click', () => handleClick(char));
    container.appendChild(btn);
  });
  container.appendChild(document.createElement('br'));
});
