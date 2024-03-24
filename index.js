#! /usr/bin/env node
import inquirer from "inquirer";
//printing a Wellcome Message
console.log("\n\tWellcome to \'sania_shaikh\' - CLI Simple Calculator\n");
let answers = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select One Operator To Perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Divition"],
    },
]);
//Conditional statements IF_ELSE
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Divition") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("please select valid operator");
}
