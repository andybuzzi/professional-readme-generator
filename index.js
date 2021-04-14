// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./generateMarkdown");

// // TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your project? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the name of your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "githubPage",
      message: "What is your GitHub deployed project link? (Required)",
      validate: (githubPageInput) => {
        if (githubPageInput) {
          return true;
        } else {
          console.log("Please enter the link of your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of your project (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide a description of your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install your project?",
    },
    {
      type: "input",
      name: "usage",
      message:
        "What is the usage of this project? Please provide instructions and examples for use",
    },
    {
      type: "list",
      name: "license",
      message: "Which license are you using? (Check all that apply)",
      choices: ["MIT", "Apache-2.0", "BSD 3", "GNU", "Mozilla", "Open"],
    },
    {
      type: "confirm",
      name: "confirmContribute",
      message: "Would you like other developers to contribute to your project?",
      default: true,
    },
    {
      type: "input",
      name: "contribute",
      message: "Please add guidelines for how to contribute",
      when: ({ confirmContribute }) => {
        if (confirmContribute) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmTests",
      message: "Would you like to write tests for your application?",
      default: true,
    },
    {
      type: "input",
      name: "tests",
      message: "Please provide examples on how to run the tests",
      when: ({ confirmTests }) => {
        if (confirmTests) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "username",
      message: "Enter your GitHub Username (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your GitHub Username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your email address!");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmReachOut",
      message:
        "Would you like to enter instructions on how to reach out for questions and information?",
      default: true,
    },
    {
      type: "input",
      name: "reachOut",
      message: "Please enter instruction on how to reach out",
      when: ({ confirmReachOut }) => {
        if (confirmReachOut) {
          return true;
        } else {
          return false;
        }
      },
    },
  ]);
};

// // TODO: Create a function to write README file
function init() {
  questions().then((readmeData) => {
    const readMe = generatePage(readmeData);

    fs.writeFile("./readme.md", readMe, (err) => {
      if (err) throw new Error(err);
      console.log(
        "Page created! Check out readme.md in this directory to see it!"
      );
    });
  });
}

// // Function call to initialize app
init();
