// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager{
    constructor(Manager){
        this.Manager = Manager;
        this.officeNumber = 100;
    }
    getRole() {
        return "Manager";
    }
}