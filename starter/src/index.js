// Import required modules and classes
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const team = [];
const render = require("../src/page-template");
const OUTPUT_DIR = process.cwd()
// const html = render(team);

// Function to add a Manager
async function addManager() {
    const managerData = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the manager's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the manager's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the manager's email:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office number:",
      },
    ]);
  
    const manager = new Manager(
      managerData.name,
      managerData.id,
      managerData.email,
      managerData.officeNumber
    );
  
    team.push(manager);
    console.log("Manager added successfully!");
    await addEmployee();
  }
  
  // Function to add an Engineer
  async function addEngineer() {
    const engineerData = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the engineer's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the engineer's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the engineer's email:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter the engineer's GitHub username:",
      },
    ]);
  
    const engineer = new Engineer(
      engineerData.name,
      engineerData.id,
      engineerData.email,
      engineerData.github
    );
  
    team.push(engineer);
    console.log("Engineer added successfully!");
    await addEmployee();
  }
  
  // Function to add an Intern
  async function addIntern() {
    const internData = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the intern's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the intern's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the intern's email:",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the intern's school:",
      },
    ]);
  
    const intern = new Intern(
      internData.name,
      internData.id,
      internData.email,
      internData.school
    );
  
    team.push(intern);
    console.log("Intern added successfully!");
    await addEmployee();
  }
  
  // Function to add an Employee
  async function addEmployee() {
    const employeeData = await inquirer.prompt([
      {
        type: "list",
        name: "role",
        message: "Select the role of the employee:",
        choices: ["Engineer", "Intern", "Finish building the team"],
      },
    ]);
  
    if (employeeData.role === "Engineer") {
      await addEngineer();
    } else if (employeeData.role === "Intern") {
      await addIntern();
    } else {
      generateHTML();
    }
  }
  
  // Function to generate HTML and write to file
  function generateHTML() {
    const html = render(team);
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(path.join(OUTPUT_DIR,"index.html"),html);
    console.log("Team HTML file generated successfully!");
  }
  
  // Start the application by adding the Manager
  addManager();

