const mathPower = Math.pow(2, 2);
const mathSqrt = Math.sqrt(70);

function chokka() {
  const chokka = Math.round(Math.random() * 6) + 1;
  return chokka;
}

for (i = 0; i < 20; i++) {
  // console.log(chokka());
}

// by searching chat gpt

function pickRandomName(names) {
  // Generate a random index from 0 to names.length - 1
  const randomIndex = Math.floor(Math.random() * names.length);
  // Return the name at the random index
  return names[randomIndex];
}

// Example usage
const namesArray = ["Ronaldinho", "Ronaldo", "neymer"];
const randomName = pickRandomName(namesArray);
console.log(randomName); // Outputs a random name from the array
