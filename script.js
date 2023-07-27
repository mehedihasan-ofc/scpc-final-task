// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

const reverseString = (inputString) => {
    return inputString.split('').reduce((reversed, char) => char + reversed, '');
};

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const sumPositiveNumbers = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }

    return sum;
};
