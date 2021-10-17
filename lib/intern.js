const Employee = require('./employee')

class Intern extends Employee {
    constructor (name, id, email, school){
        super(name, id, email, school);
        this.school = school;
    }
    getSchool = () => this.school;
    getRole = () => 'Intern';
}
module.exports = Intern