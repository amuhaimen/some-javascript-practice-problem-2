// Task:1
// inch to feet : 1 feet = 12 inch;
// 1st way

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

const adityaFeet = inchToFeet(87);
console.log(adityaFeet);
// result: 7.25

// 2nd and advance way:
// not so good

function inchToFeetUpdate(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  return feetNumber + " feet" + " " + inchRemaining + " inch";
}

const adityaFeet2 = inchToFeetUpdate(87);
console.log(adityaFeet2);
// result: 7 feet 3 inch (type :string)

// Task:2
// miles to kilometer: 1 mile = 1.60934 km;

function milesToKilometer(miles) {
  const kilometer = miles * 1.60934;
  return kilometer;
}

const mile1 = milesToKilometer(20);
console.log(mile1);
// result: 32.1868

// extra Task:
// gram to kilogram : 1 kilogram = 1000 gram;

function gramToKilogram(kg) {
  const kilogram = kg * 1000;
  return kilogram;
}

const rice = gramToKilogram(34);
// console.log(rice);
// result: 34000;
