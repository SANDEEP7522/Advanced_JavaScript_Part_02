
function Person(name, age) {
    this.name = name; 
    this.age = age;
    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

function Employee(name, age, designation) {
    Person.call(this, name, age);
 this.designation = designation;
    this.getDetails = function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`);
    };
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
const employee1 = new Employee('Alice', 30, 'Software Engineer');
const employee2 = new Employee('Bob', 25, 'Product Manager');

employee1.sayHello();  
employee1.getDetails();

employee2.sayHello(); 
employee2.getDetails(); 
