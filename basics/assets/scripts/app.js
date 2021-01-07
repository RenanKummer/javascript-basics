const defaultResult = 0;
let acumulator = defaultResult;

function getUserInputAsInt() {
  const numberInput = parseInt(userInput.value);

  if (!isNaN(numberInput)) {
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

function add() {
  const numberToAdd = getUserInputAsInt();
  const description = describeCalculation('+', acumulator, numberToAdd);

  acumulator += numberToAdd;

  outputResult(acumulator, description);
}

function subtract() {
  const numberToSubtract = getUserInputAsInt();
  const description = describeCalculation('-', acumulator, numberToSubtract);

  acumulator -= numberToSubtract;

  outputResult(acumulator, description);
}

function multiply() {
  const numberToMultiply = getUserInputAsInt();
  const description = describeCalculation('*', acumulator, numberToMultiply);

  acumulator *= numberToMultiply;

  outputResult(acumulator, description);
}

function divide() {
  const numberToDivide = getUserInputAsInt();
  let description;

  if (numberToDivide > 0) {
    description = describeCalculation('/', acumulator, numberToDivide);
    acumulator /= numberToDivide;
  } else {
    description = 'Cannot divide by zero!';
  }

  outputResult(acumulator, description);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
