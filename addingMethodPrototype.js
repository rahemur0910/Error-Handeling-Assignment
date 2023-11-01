/* 
Create a prototype object called Student with a property name. Add a method called printDetails to the
prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object with the
name "Mithun" and call the printDetails method.
*/

function Student(name)
{
    this.name = name;
}

// Add the printDetails method to the the prototype

Student.prototype.printDetails = function()
{
    console.log(`Hello,The student is ${this.name}`);
};

const Mithun = new Student("Mithun");
Mithun.printDetails();