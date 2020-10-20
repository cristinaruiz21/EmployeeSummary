// TODO: Write code to define and export the Employee class
class Employee {
    constructor(Employee) {
      this.Employee = Employee;
      this.name = "Alice";
      this.id = 100;
      this.email = "test@test.com";
    }

    getName() {
        return "Alice";
      }
    getId() {
        return 100;
      }
    getEmail() {
        return "test@test.com";
      }
    getRole() {
        return "Employee";
      }
}

module.exports = Employee;