#!/usr/bin/env node
"use strict";
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var path = require('path');
var inquirer = require('inquirer');
clear();
console.log(chalk.red(figlet.textSync('coral-reef', { horizontalLayout: 'full' })));
inquirer
    .prompt([
    {
        type: "input",
        name: "name",
        message: "Enter the project's name[DIR]",
        default: "Current WD"
    },
    {
        type: "input",
        name: "favicon",
        message: "Enter favicon's URL['']",
        default: ""
    },
    {
        type: "input",
        name: "pages",
        message: "Enter the pages names for your project, you can add more later! [index.tsx]",
        default: "index.tsx"
    },
])
    .then(function (answers) {
    // Use user feedback for... whatever!!
});
