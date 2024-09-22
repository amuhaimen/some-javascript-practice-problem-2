// Different types of swaping a variable
// 1st way;

let a = 5;
let b = 9;
console.log(a, b);

let temp = a;
a = b;
b = temp;
console.log(a, b);

// 2nd way

let x = 30;
let y = 50;
console.log(x, y);

[x, y] = [y, x];
console.log(x, y);
