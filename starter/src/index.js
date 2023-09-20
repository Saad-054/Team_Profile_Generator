// Import required modules and classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const team = [];



async function addManager () {
    const {name, id, email, officeNumber} = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?"
        }
    ])
const manager = new Manager(name, id, email, officeNumber)
console.log(manager);
team.push (manager)
}
addManager()

async function addEngineer () {
    const {name, id, email, officeNumber} = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?"
        }
    ])
const engineer = new Engineer(name, id, email, officeNumber)
console.log(engineer);
team.push (engineer)
}
addEngineer()

async function addIntern () {
    const {name, id, email, officeNumber} = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?"
        }
    ])
const intern = new Intern(name, id, email, officeNumber)
console.log(intern);
team.push (intern)
}
addIntern()






// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./src/page-template.js");

// // Array to store team members
// const teamMembers = [];

// function init () {
//     inquirer.prompt([
//         {
//             type: "list",
//             name: "main",
//             message: "Please select a choice:",
//             choices: [
//                 {
//                     name: "View all Employees",
//                     value: "GATHER_ALL_EMPLOYEES",

//                 }
//             ]
//         },
//     ]).then(answer => {
//         let response = answer.main 
//         switch (response) {
//             case "GATHER_ALL_EMPLOYEES":
//                 gatherEmployees();
//                 break;
//         }
//     })
// }

// function gatherEmployees() {
//     DB.getAllEmployees()
//         .then(([rows]) => {
//             let employees = rows;
//             console.table(employees)
//         })
//         .then(() => init())
// }
// // we need to add a main prompt that runs when the program is ran
// // it will use inquirer to  ask a list of main questions
// // .then we want to build a switch case statement
// // that willl run a function, based off of what the response from the user is
// // the function will interact with the database

// // if the main question is something that requires  a follow up
// // we can run a secondary prompt 

// // Function to gather information about the team members
// function gatherTeamInfo() {
//     // Prompt the user for manager's information
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "managerName",
//             message: "Enter the manager's name:"
//         },


//     ]).then(managerAnswers => {
//         // Create a Manager instance with the provided information
//         const manager = new Manager(managerAnswers.managerName, /* other properties */);
        
//         // Push the manager instance to the teamMembers array
//         teamMembers.push(manager);
        
//         // Prompt the user to add more team members (engineers or interns)
//         promptToAddTeamMember();
//     });
// }

// // Function to prompt the user to add more team members
// function promptToAddTeamMember() {
//     // Prompt the user to choose the type of team member (engineer, intern, or finish)
//     inquirer.prompt([
//         {
//             type: "list",
//             name: "memberType",
//             message: "Choose the type of team member to add:",
//             choices: ["Engineer", "Intern", "Finish building the team"]
//         }
//     ]).then(choiceAnswers => {
//         if (choiceAnswers.memberType === "Finish building the team") {
//             // Generate the HTML page and write it to the file
//             const renderedHTML = render(teamMembers);
//             fs.writeFileSync(outputPath, renderedHTML);
//             console.log("Team HTML page generated successfully!");
//         } else {
//             // Call a function to gather information for the chosen team member type
//             if (choiceAnswers.memberType === "Engineer") {
//                 gatherEngineerInfo();
//             } else {
//                 gatherInternInfo();
//             }
//         }
//     });
// }

// // Function to gather information about an engineer
// function gatherEngineerInfo() {
//     // Prompt the user for engineer's information
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "engineerName",
//             message: "Enter the engineer's name:"
//         },


//     ]).then(engineerAnswers => {
//         // Create an Engineer instance with the provided information
//         const engineer = new Engineer(engineerAnswers.engineerName, /* other properties */);
        
//         // Push the engineer instance to the teamMembers array
//         teamMembers.push(engineer);
        
//         // Prompt the user to add more team members (engineers or interns)
//         promptToAddTeamMember();
//     });
// }

// // Function to gather information about an intern
// function gatherInternInfo() {
//     // Prompt the user for intern's information
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "internName",
//             message: "Enter the intern's name:"
           
//         },
//         // Add more prompts for intern's ID, email, and school
//         // ...

//     ]).then(internAnswers => {
//         // Create an Intern instance with the provided information
//         const intern = new Intern(internAnswers.internName, /* other properties */);
        
//         // Push the intern instance to the teamMembers array
//         teamMembers.push(intern);
        
//         // Prompt the user to add more team members (engineers or interns)
//         promptToAddTeamMember();
//     });
// }


// init()
// // Start by gathering information about the manager
// gatherTeamInfo();
// //