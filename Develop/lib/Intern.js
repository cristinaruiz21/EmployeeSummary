// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern{
    constructor(Intern){
        this.Intern = Intern;
        this.school = "UCLA";
    }
    getRole() {
        return "Intern";
    }
}