const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer.prompt([
    {
        type: "input",
        message: "Enter Project Title",
        name: "title"
    },
    {
        type: "input",
        message: "Enter Description of the Project",
        name: "description"
    },
    {
        type: "input",
        message: "Describe the steps necessary for installing this Project",
        name: "installation"
    },
    {
        type: "input",
        message: "Describe the proper usage of this project",
        name: "usage"
    },
    {
        type: "input",
        message: "List the credits for your project",
        name: "credits"
    },
    {
        type: "input",
        message: "List any relevant licensing information",
        name: "license"
    },
    {
        type: "input",
        message: "Any badges you need to list, do so here:",
        name: "badges"
    },
    {
        type: "input",
        message: "List any contributions made to this project",
        name: "contributions"
    },
    {
        type: "input",
        message: "Do you have any run tests for your project? If so, put them here.",
        name: "runTest"
    }
])

.then(function(answers){
    console.log(answers);

    const generatedFile = generateMarkdown(answers);

    console.log(generatedFile);
})