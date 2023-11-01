/*
Create a function called getPerson that takes an object as a parameter representing a person's name and age.
The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>".
However, if the parameter is not a valid object with the properties "name" and "age", the function should throw
an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error
message if it occurs.
*/

// create a function

function getPerson(personObject)
{
    try
    {
        if(typeof personObject !== 'object' || !personObject.name || !personObject.age)
        {
            throw new Error("Invalid Parameter Type");
        }

        const name = personObject.name;
        const age = personObject.age;
        return `Name ${name}, Age: ${age}`;
    }
    catch(error)
    {
        return error.message;
    }
}

const person1 = {name: "Mithun", age: 20};
const person2 = {name: "Mithun"};
const person3 = (["name","Mithun"]);

console.log(getPerson(person1));
console.log(getPerson(person2));
console.log(getPerson(person3));