#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const inquirer = require('inquirer');

interface obj{
	type: string;
	name: string;
	message: string;
	default: string
}

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
  .then((answers: obj) => {
    // Use user feedback for... whatever!!
  })
