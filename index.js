#!/usr/bin/env node
'use strict';
const triangle = require("./triangle");
const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: 'input',
        name: 's1',
        message: "What is the length of side 1?"
    },
    {
        type: 'input',
        name: 's2',
        message: "What is the length of side 2?"
    },
    {
        type: 'input',
        name: 's3',
        message: "What is the length of side 3?"
    },
]).then(answers => {
    let {s1, s2, s3} = {...answers}
    console.log(triangle(s1, s2, s3))
});