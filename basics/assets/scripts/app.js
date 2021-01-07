// Use 'const' by default (unless the variable needs to be modified later)
const defaultResult = 0;

// Strings may be combined by concatenation or interpolation (aka string template)
const concatenationDescription = '((' + defaultResult + ' + 10) * 2) / 4 - 1';
const interpolationDescription = `((${defaultResult} + 10) * 2) / 4 - 1`;

let currentResult = defaultResult;
// JavaScript has operator precedence rules, but programmers may define the order using parentheses
currentResult = ((currentResult + 10) * 2) / 4 - 1;

// Call function from 'vendor.js' - it must be imported before 'app.js' for this to work
outputResult(currentResult, interpolationDescription);
