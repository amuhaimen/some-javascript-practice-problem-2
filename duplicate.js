// write a function that will take an array as parameter and removes the duplicate items from that array

function removeDuplicate(items) {
  let unique = [];
  for (const item of items) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }

  return unique;
}

const weedPuffer = [
  "Akib",
  "Shakib",
  "Rafiq",
  "Shafiq",
  "Abed",
  "Akib",
  "bodi",
  "bodi",
  "Sarjis",
  "Hasnat",
  "Sarjis",
];

const numbers = [
  10, 35, 23, 54, 87, 2, 10, 67, 23, 65, 10, 20, 30, 33, 35, 23, 13,
];

const result = removeDuplicate(numbers);
console.log(result);
// result: [ 10, 35, 23, 54, 87, 2, 67, 65, 20, 30, 33, 13];
