#!/usr/bin/env node

import inquirer from "inquirer";

const myPin: number = 125114;
const myAcc: number = 900123456789;
let mybal: number = 125099;

console.log("For Teachers, Pin is 125114");


console.log("WELCOME TO ATM");

console.log(`Account Number :${myAcc}`);

console.log(`You Have ${mybal} In Your Account.`);
let pinInput = await inquirer.prompt([
    { name: "pin", message: "Enter Your Account Pin", type: "number" },
]);

if (pinInput.pin === myPin) {
    let actionAns = await inquirer.prompt([
        {
            name: "options",
            message: "Please Select Any Option",
            type: "list",
            choices: ["Withdraw Cash", "Fast Cash", "Check Balance"],
        },
    ]);
    if (actionAns.options === "Withdraw Cash") {
        let amount = await inquirer.prompt([
            { name: "cash", message: "Please, Enter Your Amount", type: "number" },
        ]);
        if (amount.cash <= mybal) {
            mybal -= amount.cash;
            console.log(
                `Cash Withdrawn Successfully, Your Remaining Balance is ${mybal}`
            );
        } else {
            console.log(
                `Dear Customer, You Have Insufficient Balance.\nYou Have ${mybal} In Your Account.`
            );
        }
    } else if (actionAns.options === "Fast Cash") {
        let fastAction = await inquirer.prompt([
            {
                name: "CashOptions",
                message: "Please Select Any Option",
                type: "list",
                choices: [5000, 10000, 15000, 50000, 200000],
            },
        ]);
        if (fastAction.CashOptions > mybal) {
            console.log(
                `You Have Insufficient Amount In Your Account.\nYou Have ${mybal} In Your Account.`
            );
        } else if (fastAction.CashOptions === 5000) {
            mybal -= 5000;
            console.log(
                `You Have Successfully Withdrawn 5000.\nNow, You Have ${mybal} In Your Account.`
            );
        } else if (fastAction.CashOptions === 10000) {
            mybal -= 10000;
            console.log(
                `You Have Successfully Withdrawn 10000.\nNow, You Have ${mybal} In Your Account.`
            );
        } else if (fastAction.CashOptions === 15000) {
            mybal -= 15000;
            console.log(
                `You Have Successfully Withdrawn 15000.\nNow, You Have ${mybal} In Your Account.`
            );
        } else if (fastAction.CashOptions === 50000) {
            mybal -= 50000;
            console.log(
                `You Have Successfully Withdrawn 50000.\nNow, You Have ${mybal} In Your Account.`
            );
        } else if (fastAction.CashOptions === 200000) {
            mybal -= 200000;
            console.log(
                `You Have Successfully Withdrawn 200000.\nNow, You Have ${mybal} In Your Account.`
            );
        }
    } else if (actionAns.options === "Check Balance") {
        console.log(`Your Remaining Balance Is ${mybal}`);
    }
}
else {
    console.log("You Entered Incorrect Pin For This Account Number");
}
