const inquirer = require('inquirer');
const fs = require('fs');
//create link to other js file
const generateMarkdown = require('./utils/generateMarkdown');
const path = require("path");


const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What's your project name?"
    },
    {
        type: 'input',
        name: 'desc',
        message: "Describe your project:"
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
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'none']
    }, 
    {
        type: 'input',
        name: 'usage',
        message: "How does the user use this application?"
    }, 
    {
        type: 'input',
        name: 'contribute',
        message: "How can someone contribute?"
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

function writeToFile(fileName, data) {
    //create new README in the current working directory
    fs.writeFile(path.join(process.cwd(), fileName), data, (err) => {
        if (err) throw err;
    })
}

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        //create README file
        writeToFile("README.md", generateMarkdown(answers))
        console.log("README.md has been created!")
    }) 
}

// Function call to initialize app
init();
