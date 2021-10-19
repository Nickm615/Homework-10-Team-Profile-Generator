const inquirer = require('inquirer');
const fs = require('fs');
const pageTemplate = require('./src/page-template');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern')
const engineerQuestions = [{
    type: 'input',
    message: 'What is the name of your engineer?',
    name:'name'
},
{
    type: 'input',
    message: 'What is the employee ID number of your engineer?',
    name:'id'
},
{
    type: 'email',
    message:'What is the email address of your engineer?',
    name:'email'
},
{
    type: 'input',
    message:'What is the github username of your engineer?',
    name:'github'
}]
const managerQuestions = [
    {
      type: 'input',
      message:'What is the name of your team manager?',
      name:'name',
    },
    {
        type: 'input',
        message:'What is the employee ID number of your manager?',
        name:'id'
    },
    {
        type: 'email',
        message:'What is the email address of your manager?',
        name:'email'
    },
    {
        type:'input',
        message:'What is the office number of your manager?',
        name:'officeNumber'
    }
]
const internQuestions = [{
    type: 'input',
    message: 'What is the name of your intern?',
    name:'name'
},
{
    type: 'input',
    message: 'What is the employee ID number of your intern?',
    name:'id'
},
{
    type: 'email',
    message:'What is the email address of your intern?',
    name:'email'
},
{
    type: 'input',
    message:'What is the school of your intern?',
    name:'school'
}]
const team =[]
function init() {
   return inquirer
        .prompt(managerQuestions)
    }

init()
.then(response => {
    console.log(response);
    const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
    team.push(manager)
    console.log(team)
    teamBuilder()
})
function teamBuilder(){
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'What type of employee would you like to add?',
            choices: ['Engineer', 'Intern', 'No more members'],
            name: 'type'
        }
    ])
    .then(response => {
        switch (response.type) {
            case 'Engineer':
                inquirer
                .prompt(engineerQuestions)
                .then(response=>{
                    const engineer = new Engineer(response.name, response.id, response.email, response.github)
                    team.push(engineer)
                    // teamBuilder();
                    console.log(team);
                })
                .then(()=>teamBuilder())
                break;
            case 'Intern':
                inquirer
                .prompt(internQuestions)
                .then(response=>{
                    const intern = new Intern(response.name, response.id, response.email, response.school)
                    team.push(intern)
                    console.log(team);
                })
                .then(()=>teamBuilder())
                break;
            case 'No more members':
                fs.writeFile('./dist/team.html', pageTemplate(team), (err) => {
                    if (err) {
                        return console.error(err);
                    }})

                
        
        
           
        }
    })

}
