// Use 'const' by default (unless the variable needs to be modified later)
const defaultResult = 0;
let currentResult = defaultResult; // This variable has global scope

// Custom function with parameters
// function add(num1, num2) {
//   let currentResult = num1 + num2; // This variable has local scope; it is shadowing the global scope variable
//   return currentResult;
// }

// Custom function without parameters
function add() {
  const description = `${currentResult} + ${getUserInputAsInt()}`;

  currentResult += getUserInputAsInt();
  outputResult(currentResult, description);
}

function getUserInputAsInt() {
  return parseInt(userInput.value);
}

// Listen to click events on '+' button
addBtn.addEventListener('click', add);

// Strings may be combined by concatenation or interpolation (aka string template)
const concatenationDescription = '((' + defaultResult + ' + 10) * 2) / 4 - 1';
const interpolationDescription = `((${defaultResult} + 10) * 2) / 4 - 1`;

// JavaScript has operator precedence rules, but programmers may define the order using parentheses
currentResult = ((currentResult + 10) * 2) / 4 - 1;

// Call function from 'vendor.js' - it must be imported before 'app.js' for this to work
outputResult(currentResult, interpolationDescription);

// Call our custom function
// currentResult = add(1, 2);
// const addDescription = '1 + 2';

// outputResult(currentResult, addDescription);
