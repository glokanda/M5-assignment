/*-------------------------------------------------------------------------------
# Name:        module 5 / Question #3
# Purpose: 
# Author:      Gloire Kanda
# Created:     03/12/2024
# Copyright:   (c) Kanda 2024
-------------------------------------------------------------------------------*/


// ADD A FUNCTION CALLED CALCULATE

function calculate(x, y, operation){

    let result;

    switch(operation){
        case "add":
            result = x + y;
            break;
        case "substract":
            result = x - y;
            break;
        case "multiply":
            result = x * y;
            break;

        case "divide":
            if (y !== 0) {
                return x / y;
            } 
            else {
                alert("Error: Cannot divide by zero.");
                return NaN; 
            }   
        default:
            alert("Invalid operation. Please enter add, subtract, multiply, or divide.");    
    }

    return result;

}


function calculateApp(){
let repeat;
do{// COLLECT FIRST NUMBER FROM USER
let x = parseFloat(prompt("Enter the fisrt number: "));

// COLLECT SECOND NUMBER FROM USER
let y = parseFloat(prompt("Enter the second number: "));

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let operation = prompt("Enter the operation (add, subtract, multiply, divide): ")

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
let result = calculate(x, y, operation);
if ( !isNaN(result) ) {
    alert(`The result of ${operation} is: ${result}`);
}

repeat = prompt("Do you want to perform another calculation? (y/n)")

} while(repeat === "y");

}

// Calling the App function

calculateApp();


