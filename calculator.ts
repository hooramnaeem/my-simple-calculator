#! /usr/bin/env node
import inquirer from "inquirer";

// ASKING USER FOR INPUT THROUGh inquirer

let answers = await inquirer.prompt([
    {
        message:"Enter first number",
        type:"number",
        name:"firstNumber"
    },
    {
        message:"Enter second number",
        type:"number",
        name:"secondNumber"
    },
    {
        message:"Select one operator to perform operatios",
        type:"list",
        name:"operator",
        choices:["Addition","Subtraction","Multiplication","Division"],
    },
]);
// now if else statments to perform operation on input 

if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)

}
else if (answers.operator === "Subtraction"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if (answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else{
    console.log("please enter valid input:")
}

















