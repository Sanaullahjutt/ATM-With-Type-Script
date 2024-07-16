import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1234;
let pinAswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: [`withdraw`, "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("your remaning balance is " + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("your remaning balance is " + myBalance);
    }
}
else {
    console.log("incorrect pin code");
}
;
