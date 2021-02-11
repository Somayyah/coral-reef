#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('enquirer');

clear();
console.log(
  chalk.red(
    figlet.textSync('Coral-CLI', { horizontalLayout: 'full' })
  )
);

