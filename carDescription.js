/*
Create a class called Car with three properties: company, model, and year. The class should have a method
called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an
instance of the Car class and call the getDescription method.
*/

class getCar
{
    constructor(company, model, year)
    {
        this.company = company;
        this.model = model;
        this.year = year;
    }

    getDescription()
    {
        return `This is a ${this.year} ${this.company} ${this.model}`;
    }
}

const myCar = new getCar("Skoda", "Rapid", 2002);

const carDescription = myCar.getDescription();
console.log(carDescription);