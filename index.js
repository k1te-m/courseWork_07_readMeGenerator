const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user (title, description, table of contents, installation, usage, license, contributing, tests, and questions)
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
        default: "k1te-m"
    },
    {
        type: "input",
        message: "What is the name of your repo?",
        name: "repo",
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input", 
        message: "Please enter a description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "If necessary, please describe the installation steps required for your project.",
        name: "installation"
    },
    {
        type: "input",
        message: "If applicable, please provide any examples of how to use your project.",
        name: "usage"
    },
    {
        type: "list",
        message: "Please choose a license for your project.",
        choices:['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: "license"
    },
    {
        type: "input",
        message: "If applicable, how can other developers contribute to your project?",
        name: "contributing"
    },
    {
        type: "input",
        message: "Please provide any tests along with instructions on how to run them for your project.",
        name: "tests"
    },
    {
        type: "input",
        message: "If desired, please provide your email address for any questions users may have.",
        name: "questions"
    }
];



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            return console.log(error);
        } 
        console.log("Success... Generating your README.md file.");
    })
};

// function to initialize program
function init() {
    const userResponse = inquirer.prompt(questions).then(userInputs => {
        const markdown = generateMarkdown(userInputs);
        writeToFile("TESTREADME.md", markdown);
    });
    
}

// function call to initialize program
init();

