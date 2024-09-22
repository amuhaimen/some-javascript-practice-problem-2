/*
Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2

sample-input:
numbers = [5,6,11,12,98, 5]
find: 25
output: 0
 */

function specificNumberCount(target, numbers) {
  let count = 0;

  for (const number of numbers) {
    if (number === target) {
      count++;
    }
  }
  return count;
}

const result = specificNumberCount(
  87,
  [10, 20, 10, 50, 20, 10, 55, 5, 2, 4, 8, 9, 9, 9]
);

// console.log(result);

// another way:
function countOccurrences(arr) {
  const counts = {}; // Object to store number counts

  // Loop through the array and count each number
  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }

  return counts;
}

// Example usage
const numbers = [5, 6, 11, 12, 98, 5];
// const occurrences =
countOccurrences(numbers);
// console.log(occurrences);

// Generate a random number between 10 to 20.

// Generate a random number between 10 and 20 (inclusive)
function getRandomNumber() {
  //   return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  //   console.log(Math.floor(Math.random() * (20 - 10 + 1))) + 10;
}

// const randomNumber = getRandomNumber();
getRandomNumber();
// console.log(randomNumber);

/*
Task 3:
Write a function to count the number of vowels in a string.
 */

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  console.log(count);
}

countVowels("aaaeeeiouEAEI O U bcde eeeee aa ii oo uu");

/*
Task-4:
 Write a function to find the longest word in a given string. sample-input: I am learning Programming to become a programmer
 */

function findLongestWord(str) {
  const words = str.split(" ");
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  //   console.log(longestWord);
}

findLongestWord("I am learning programming to become a programmer");
