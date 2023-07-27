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

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

const findMostFrequentElement = (arr) => {
    if (arr.length === 0) {
        return null; // Return null for an empty array
    }

    const frequencyMap = new Map();

    arr.forEach((element) => {
        frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
    });

    let mostFrequentElement;
    let highestFrequency = 0;

    frequencyMap.forEach((frequency, element) => {
        if (frequency > highestFrequency) {
            mostFrequentElement = element;
            highestFrequency = frequency;
        }
    });

    return mostFrequentElement;
};

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const findTwoNumbersWithSum = (arr, target) => {
    for (let left = 0; left < arr.length - 1; left++) {
        for (let right = left + 1; right < arr.length; right++) {
            const sum = arr[left] + arr[right];
            if (sum === target) {
                return [left, right];
            }
        }
    }

    return null; // If no such pair is found, return null
};
