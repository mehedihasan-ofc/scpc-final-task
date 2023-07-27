// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

const reverseString = (inputString) => {
    return inputString.split('').reduce((reversed, char) => char + reversed, '');
};