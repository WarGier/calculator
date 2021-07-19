'use strict'

let displayValue = document.querySelector('.result');
displayValue.innerHTML = 0;
let calculation = document.querySelector('.calculation');
let digits = document.querySelectorAll('.digit');

// clearing display screen
let backspace = document.querySelector('.back');
let clear = document.querySelector('.clear');

// operators
let add = document.querySelector('.add');
let sub = document.querySelector('.substract');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let equals = document.querySelector('.equals');
let percent = document.querySelector('.percent');

let number = '';
let numbers = [];

let num1 = null;
let num2 = null;
let result = null;

let operator = '';

function operate(operator, a, b){
    console.log( `${a} ${operator} ${b} = ...` );
    switch (operator) {
        case 'add':
            num1 = a + b;
            num2 = null;
            number = '';
            return a + b;
        case 'substract':
            num1 = a - b;
            num2 = null;
            number = '';
            return a - b;
        case 'multiply':
                num1 = a * b;
                num2 = null;
                number = '';
                return a * b;
        case 'divide':
            num1 = a / b;
            num2 = null;
            number = '';
            return a / b;
        default:
            return 'rip';
    }
}

function getDigit(e){
    if(number == '0' && this.value == '0'){
        return false;
    }
    
    // get digit I clicked on
    number += this.value;
    displayValue.innerHTML = number;
}

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

function clearScreen(e){
    number = '0';
    num1 = null;
    num2 = null;
    result = null;
    displayValue.innerHTML = number;
}


function manageNumbers(){
    if(num1 == null){
        num1 = Number(number);
        number = '';
    }

    operator = this.classList[1];
}

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

function makePercentage(){
    if(num2 == null){
        num2 = Number(number);
        number = '';
    }

    console.log( 'make percentage' );
}

digits.forEach(digit => {
    digit.addEventListener('click', getDigit);
});

// clearing
backspace.addEventListener('click', delDigit);
clear.addEventListener('click', clearScreen);

// operators
add.addEventListener('click', manageNumbers);
sub.addEventListener('click', manageNumbers)
multiply.addEventListener('click', manageNumbers);
divide.addEventListener('click', manageNumbers);
equals.addEventListener('click', getResult);