#!/usr/bin/env node
"use strict";
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var path = require('path');
var program = require('enquirer');
clear();
console.log(chalk.red(figlet.textSync('Coral-CLI', { horizontalLayout: 'full' })));
