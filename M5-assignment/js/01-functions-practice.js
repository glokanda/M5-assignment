/*-------------------------------------------------------------------------------
# Name:        module 5 / Question #1
# Purpose: 
# Author:      Gloire Kanda
# Created:     03/05/2024
# Copyright:   (c) Kanda 2024
-------------------------------------------------------------------------------*/

//STEP 1
function halfNumber(number){
    const half = number / 2;
    return half;
}

//STEP 2
function squareNumber(number){
    const square = number**2;
    return square;

}

//STEP 3
function percentOf(number1, number2){
     const percentage = (number1 / number2) * 100; 
     return percentage;
}

//STEP 4
function findModulus(number1, number2){

    const modulusNumber = number1 % number2;
    return modulusNumber;
}


//STEP 5

function demoApp(){
let num1 = parseFloat(prompt("Enter the first number: "))   
let num2 = parseFloat(prompt("Enter the second number: "))   
let halfResult = halfNumber(num1);
let squareResult = squareNumber(num2);
let percentResult = percentOf(num1, num2);
let modulusResult = findModulus(num1, num2);

console.log(`Half of ${num1} is: ${halfResult}`);
console.log(`The square of ${num2} is: ${squareResult}`);
console.log(`${num1} is ${percentResult.toFixed(2)}% of ${num2}`);
console.log(`The modulus of ${num1} and ${num2} is: ${modulusResult}`);
}

// Calling the demoApp

demoApp();
