#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const inquirer = require('inquirer');

clear();
console.log(
  chalk.red(
    figlet.textSync('coral-reef-CLI', { horizontalLayout: 'full' })
  )
);

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
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
