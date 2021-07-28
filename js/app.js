'use strict'

// screen values
let displayValue = document.querySelector('.result');
displayValue.innerHTML = 0;
let calculation = document.querySelector('.calculation');

// numbers 0-9
let digits = document.querySelectorAll('.digit');

// clearing display screen buttons
let backspace = document.querySelector('.back');
let clear = document.querySelector('.clear');

// all operator buttons
let add = document.querySelector('.add');
let sub = document.querySelector('.substract');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let equals = document.querySelector('.equals');
let sign = document.querySelector('.sign');
let decimal = document.querySelector('.decimal-point');

let number = ''; // placeholder for all numbers to show on screen
let num1 = null; // first number or holds mid-result
let num2 = null; // always will be the second number
let result = null; // this one will store the result
let operator = ''; // string for operator

// do all the calculation
function operate(operator, a, b){
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case 'add':
            num1 = a + b;
            if (num1.toString().split(".").length > 1){
                if(num1.toString().split(".")[1].length > 3){
                    num1 = num1.toFixed(2);
                }
            }     
            num2 = null;
            number = '';
            return num1; // result is stored in 'first' number
        case 'substract':
            num1 = a - b;
            if (num1.toString().split(".").length > 1){
                if(num1.toString().split(".")[1].length > 3){
                    num1 = num1.toFixed(2);
                }
            }
            num2 = null;
            number = '';
            return num1; // result is stored in 'first' number
        case 'multiply':
            num1 = a * b;
            console.log( num1 );
            if (num1.toString().split(".").length > 1){
                if(num1.toString().split(".")[1].length > 3){
                    num1 = num1.toFixed(2);
                }
            }
            num2 = null;
            number = '';
            return num1; // result is stored in 'first' number
        case 'divide':
            num1 = a / b;
            if (num1.toString().split(".").length > 1){
                if(num1.toString().split(".")[1].length > 3){
                    num1 = num1.toFixed(2);
                }
            }
            num2 = null;
            number = '';
            return num1; // result is stored in 'first' number
        default:
            return 'rip';
    }
}

// get the number after clicking the digit
function getDigit(e){
    if(number == '0' && this.value == '0'){
        return false;
    }

    // if there is a '0' after clear, just replace that '0' with number
    if(number.length == 1 && number == '0'){
        number = this.value;
    } else {
        number += this.value;
    }
    
    displayValue.innerHTML = number;
}

// delete the digit from current number {doesnt work for results}
function delDigit(e){
    // remove last digit from the number
    number = number.slice(0, number.length-1);
    displayValue.innerHTML = number;
    
    // if display value is none, show 0
    if(number.length == 0){
        displayValue.innerHTML = 0;
        return false;
    }
}

// C function, clears everything
function clearScreen(e){
    number = '0';
    num1 = null;
    num2 = null;
    result = null;
    displayValue.innerHTML = number;
}

// after clicking any of the operands, this function will trigger
function manageNumbers(){
    if(num1 == null){
        num1 = Number(number);
        number = '';
    }

    operator = this.classList[1];
}

// after clicking '=' store the second number, and do the calculation
function getResult(){
    if(num2 == null){
        num2 = Number(number);
        number = '';
    }

    if(operator != ''){
        result = operate(operator, num1, num2)
        displayValue.innerHTML = result;
        operator = '';
    }
}

// make percent number from number
function changeSign(){
    console.log( 'change sign' );
    console.log( number );
    if(result != null){
        number = -result;
        displayValue.innerHTML = number;
    } else{
        number = -number;
        displayValue.innerHTML = number;
    }
}

// add decimal point to the number
function makeDecimal(){
    if(number.indexOf('.') === -1){
        number = number + '.';
        displayValue.innerHTML = number;
    }
}


// event handler to all digits
digits.forEach(digit => {
    digit.addEventListener('click', getDigit);
});

// event handler to clearing functions
backspace.addEventListener('click', delDigit);
clear.addEventListener('click', clearScreen);

// event handler to all operands
add.addEventListener('click', manageNumbers);
sub.addEventListener('click', manageNumbers);
multiply.addEventListener('click', manageNumbers);
divide.addEventListener('click', manageNumbers);
sign.addEventListener('click', changeSign);
decimal.addEventListener('click', makeDecimal);
equals.addEventListener('click', getResult);