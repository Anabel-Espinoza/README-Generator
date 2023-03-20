// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: "Please enter your project's name."
    },
    {
        type: 'input',
        name: 'projectDesc',
        message: "Provide your project's description."
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are the steps required to install your project?",
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'usage',
        message: "Provide instructions or examples to use your project."
    },
    {
        type: 'input',
        name: 'link',
        message: "Provide the link to use/download your project."
    },
    {
        type: 'input',
        name: 'credits',
        message: "List collaborations, third-party assets, and tutorials used."
    },
    {
        type: 'input',
        name: 'creator',
        message: "Enter your gitHub username"
    },
    {
        // type: 'checkbox',
        type: 'input',
        name: 'license',
        message: "Please enter your project's license.",
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'Unlicense']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
