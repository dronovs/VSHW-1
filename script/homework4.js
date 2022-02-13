'use strict';
let operator = prompt('choose operation (add, sub, mult, div)');
let firstOperand = +prompt(`Enter first operand`);
let secondOperand = +prompt('Enter second operand');

if (operator === 'add') {
    console.log(`${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}`);
} else if (operator === 'sub') {
    console.log(`${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`);
} else if (operator === 'mult') {
    console.log(`${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}`);
} else if (operator === 'div') {
    console.log(`${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}`);
}
