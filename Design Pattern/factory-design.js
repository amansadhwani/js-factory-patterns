const employees = [];
function getEmployeeData() {
  console.log(`My Name is  ${this.name}  and I am a ${this.type}`);
}
function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
      case 2:
        return new Tester(name);
    }
  };
}

const employeeFactory = new EmployeeFactory();

employees.push(employeeFactory.create("Aman", 1));
employees.push(employeeFactory.create("Rahul", 2));
employees.push(employeeFactory.create("Rafael", 1));

employees.forEach((emp) => {
  getEmployeeData.call(emp);
});
