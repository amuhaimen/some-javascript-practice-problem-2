/*
Write a function which takes an array as parameter
give me the average of the odd numbers in the array
 */

function oddsArrayAverage(numbers) {
  let odds = [];
  for (const number of numbers) {
    if (number % 2 !== 0) {
      odds.push(number);
    }
  }
  let sum = 0;
  for (const odd of odds) {
    sum += odd;
  }
  const length = odds.length;
  const avg = parseFloat((sum / length).toFixed(4));
  return avg;
}

const numbers = [1, 2, 4, 7, 9, 12, 34, 55, 654, 57, 32, 23, 45];
const result = oddsArrayAverage(numbers);
console.log(result);
// result: 28.1429;
