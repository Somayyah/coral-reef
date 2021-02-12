#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');
const funs = require("./funs")

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
  .then((answers: obj) => {
	console.log(`Done!! cd into ${__dirname}?`)
  })
