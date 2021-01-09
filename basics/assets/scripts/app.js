const defaultResult = 0;
let acumulator = defaultResult;
let calculatorHistory = [];

function getUserInputAsInt() {
  const numberInput = parseInt(userInput.value);

  if (typeof numberInput === 'number' && !isNaN(numberInput)) {
    return numberInput;
  }

  console.error(`getUserInputAsInt() called for non-integer user input`);
  return defaultResult;
}

function describeCalculation(operator, num1, num2) {
  if (operator !== '' && num1 !== '' && num2 !== '') {
    return `${num1} ${operator} ${num2}`;
  }

  return '';
}

function logCalculatorHistory(
  operator,
  inputNum,
  previousTotal,
  newTotal,
  description
) {
  const logEntry = {
    operator: operator,
    number: inputNum,
    previousTotal: previousTotal,
    newTotal: newTotal,
    description: description
  };

  calculatorHistory.push(logEntry);
  console.log(calculatorHistory);
}

function add() {
  const numberToAdd = getUserInputAsInt();
  const previousTotal = acumulator;
  const description = describeCalculation('+', acumulator, numberToAdd);

  acumulator += numberToAdd;

  outputResult(acumulator, description);
  logCalculatorHistory(
    '+',
    numberToAdd,
    previousTotal,
    acumulator,
    description
  );
}

function subtract() {
  const numberToSubtract = getUserInputAsInt();
  const previousTotal = acumulator;
  const description = describeCalculation('-', acumulator, numberToSubtract);

  acumulator -= numberToSubtract;

  outputResult(acumulator, description);
  logCalculatorHistory(
    '-',
    numberToSubtract,
    previousTotal,
    acumulator,
    description
  );
}

function multiply() {
  const numberToMultiply = getUserInputAsInt();
  const previousTotal = acumulator;
  const description = describeCalculation('*', acumulator, numberToMultiply);

  acumulator *= numberToMultiply;

  outputResult(acumulator, description);
  logCalculatorHistory(
    '*',
    numberToMultiply,
    previousTotal,
    acumulator,
    description
  );
}

function divide() {
  const numberToDivide = getUserInputAsInt();
  const previousTotal = acumulator;
  let description;

  if (numberToDivide > 0) {
    description = describeCalculation('/', acumulator, numberToDivide);
    acumulator /= numberToDivide;
  } else {
    description = 'Cannot divide by zero!';
  }

  outputResult(acumulator, description);
  logCalculatorHistory(
    '/',
    numberToDivide,
    previousTotal,
    acumulator,
    description
  );
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
