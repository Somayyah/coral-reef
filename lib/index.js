#!/usr/bin/env node
"use strict";
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var path = require('path');
var inquirer = require('inquirer');
clear();
console.log(chalk.red(figlet.textSync('coral-reef-CLI', { horizontalLayout: 'full' })));
inquirer
    .prompt([
    /* Pass your questions in here */
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
])
    .then(function (answers) {
    // Use user feedback for... whatever!!
});
;
