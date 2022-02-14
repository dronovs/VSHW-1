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
    
    switch (operator) {
        case '+': sums(firstOperand, secondOperand);
        break;
        case '-': subtracts(firstOperand, secondOperand);
        break;
        case '*': multiplies(firstOperand, secondOperand);
        break;
        case '/': divides(firstOperand, secondOperand);
        break;
    }
}
weirdCalculator();