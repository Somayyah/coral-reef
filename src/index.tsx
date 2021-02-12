#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');
const vars = require("./funs")

interface obj{
	type: string;
	name: string;
	message: string;
	default: string
}

clear();
console.log(
  chalk.red(
    figlet.textSync('coral-reef', { horizontalLayout: 'full' })
  )
);

console.log("Welcome to coral-reef CLI")
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
  .then((answers: obj) => {
    console.log(JSON.stringify(answers))
  })
