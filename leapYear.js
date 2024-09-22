/*
1.those year that is not divisible by 100 and if the year is divisible by 4 then it will be leap year
 */

function isLeapYear(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const year1 = isLeapYear(2020);
const year2 = isLeapYear(1987);
const year3 = isLeapYear(4300);
const year4 = isLeapYear(2000);
console.log(year1, year2, year3, year4);
// result: true false false true
