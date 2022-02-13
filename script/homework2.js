'use strict';
function weirdCalculator () {
    let firstOperand = +prompt('Please enter the first operand');
    let secondOperand = +prompt('And now enter second operand');
    let operator = prompt(`choose one of operations(+, - , *, /)`);

    function sums (a, b) {
        console.log(`result: ${a} + ${b} = ${a + b}`);
    }
    function subtracts (a, b) {
        console.log(`result: ${a} - ${b} = ${a - b}`);
    }
    function multiplies (a, b) {
        console.log(`result: ${a} * ${b} = ${a * b}`);
    }
    function divides (a, b) {
        console.log(`result: ${a} / ${b} = ${a / b}`);
    }
    if (operator === '+' ) {
        sums(firstOperand, secondOperand);
    } else if (operator === '-') {
        subtracts(firstOperand, secondOperand);
    } else if (operator === '*') {
        multiplies(firstOperand, secondOperand);
    } else if (operator === '/') {
        divides(firstOperand, secondOperand);
    }
}
weirdCalculator();