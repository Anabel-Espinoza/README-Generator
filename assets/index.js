// Packages and Modules needed
const generateMarkdown = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
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
        name: 'link',
        message: "Provide the link to use/download your project."
    }, 
    {
        type: 'input',
        name: 'usage',
        message: "Provide instructions or examples to use your project."
    },
    {
        type: 'input',
        name: 'creator',
        message: 'Enter your name.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Enter your gitHub username.'
    },
    {
        type: 'input',
        name: 'contribute',
        message: "Enter guidelines for developers to contribute to your project.",
   } ,
    {
        type: 'input',
        name: 'tests',
        message: "How can you run tests for your application",
        default: 'N/A'
   } ,
    {
        type: 'input',
        name: 'credits',
        message: "List collaborations, third-party assets, and tutorials used."
    },
    {
        type: 'list',
        name: 'license',
        message: "Please enter your project's license.",
        choices: ['MIT', 'GPLv2', 'Apache_2.0', 'GPLv3', 'BSD_3--clause', 'Unlicensed']
    }
];

// Write README file
function writeToFile(fileName, data) {
    console.log('license:', data.license)
    fs.writeFile('README.md', generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log(`Success! README file has been created: ${fileName}`) 
    )
}

// Initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => writeToFile('README.md', response))
}

// Start app
init();
