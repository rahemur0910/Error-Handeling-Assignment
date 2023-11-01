/* Write a function called convertToNumber that takes a string as an argument and returns the equivalent
number. If the string cannot be converted to a number, the function should return the string "Invalid number".
Use error handling in javascript to achieve this output. */

// create a  function to convert string to function

function convertToNumber(inputString)
{
    try
    {
        const number = parseFloat(inputString);
        // check is it number. if its not a number throw error.
        if(isNaN(number))
        {
            throw new Error("Invalid Number");
        }
        return number;
    }
    catch(error)
    {
        return "Invalid Number";
    }
}

//calle and print the output 

console.log(convertToNumber("123"));
console.log(convertToNumber("1.23"));
console.log(convertToNumber("invalid"));