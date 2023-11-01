/*
Create a class called Calculator with a static method called add. The add method should take two numbers as
arguments and return their sum. Instantiate the Calculator class and call the add method.
*/

class Calculator
{
    static add(number1,number2)
    {
        return number1+number2;
    } 
}

const calculator = new Calculator();

const result = Calculator.add(10,5);
console.log(result);