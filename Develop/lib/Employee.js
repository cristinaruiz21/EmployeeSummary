// TODO: Write code to define and export the Employee class
class Employee {
    constructor(employee, name, id, email ) {
        if(!employee){
            throw new Error ("You are not an employee.");
        }
        if(!name){
            throw new Error ("You are missing the name.");
        }
        if (!id){

            throw new Error ("You are missing the id");
        }
    }
}

module.exports = Employee;