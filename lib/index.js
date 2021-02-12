#!/usr/bin/env node
"use strict";
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var inquirer = require('inquirer');
var funs = require("./funs");
clear();
console.log(chalk.red(figlet.textSync('coral-reef', { horizontalLayout: 'full' })));
console.log("Welcome to coral-reef CLI");
inquirer
    .prompt([
    {
        type: "input",
        name: "name",
        message: "Enter the project's name[app]",
        default: "app"
    },
    {
        type: "input",
        name: "favicon",
        message: "Enter favicon's URL['']",
        default: ""
    },
    {
        type: "confirm",
        name: "language",
        message: "This project will be configured with Typescipt, proceed? Y/N",
        default: true
    },
    {
        type: "input",
        name: "pages",
        message: "Enter the pages names for your project, you can add more later! [index.tsx]",
        default: "index.tsx"
    },
])
    .then(function (answers) {
    console.log("Done!! cd into " + __dirname + "?");
});
