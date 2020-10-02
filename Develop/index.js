// Set up constants for functions and requires

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkDown = require("./utils/generateMarkdown");

const writeReadMe = util.promisify(fs.writeFile);

//begin function to question user
function promptUser() {
return inquirer.prompt([
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
        message: "What is the year of this license?",
        name: "licenseYear"
    },
    {
        type: "input",
        message: "What is the full name of the person this license is for?",
        name: "licenseName"
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
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your username on Github?",
        name: "github"
    }
]);
}

//beging asyncronous function 
async function init() {

    try {
      const answers = await promptUser();
  
      const readMe = generateMarkDown(answers);
  
      await writeReadMe("index.md", readMe);
  //console log notification to make 
      console.log("Successfully wrote to index.md");
    } catch(err) {
      console.log(err);
    }
  }

init();
