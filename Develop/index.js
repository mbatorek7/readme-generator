// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What's your project name?"
    },
    {
        type: 'input',
        name: 'desc',
        message: "What's a description of your project?"
    }, 
    {
        type: 'input',
        name: 'installation',
        message: "What's your GitHub ssh clone link?"
    }, 
    {
        type: 'input',
        name: 'credits',
        message: "Who worked on this project?"
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license do you want to use?',
        choices: ['mit', 'apache-2.0', 'gpl-3.0', 'none']
    }, 
    {
        type: 'input',
        name: 'usage',
        message: "How does the user use this application?"
    }, 
    {
        type: 'input',
        name: 'tests',
        message: "What are the test instructions?"
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter GitHub username:"
    }, 
    {
        type: 'input',
        name: 'email',
        message: "Enter email:"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(path.join(process.cwd(), fileName), data, (err) => {
        if (err) throw err;
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        //console.log(answers)
        writeToFile("README.md", generateMarkdown(answers))
    }) 
}

// Function call to initialize app
init();
