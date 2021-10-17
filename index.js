const inquirer = require('inquirer');
const { type } = require('os');

function init() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What type of employee would you like to add?',
                choices: ['Engineer', 'Manager', 'Intern'],
                name: 'type'
            }
        ])
        .then(response => {
            // console.log(response.type)
            switch (response.type) {
                case 'Engineer':
                    console.log('Engineer');
                    generateEngineer();
                    break;
                case 'Manager':
                    console.log('Manager');
                    generateManager();
                    break;
                case 'Intern':
                    console.log('Intern');
                    generateIntern();
                    break;
            
                default:''
                    break;
            }

        })
}

init();