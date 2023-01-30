function isLeapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  }
  return false;
}

console.log(isLeapYear(2100));
console.log(isLeapYear(2200));
console.log(isLeapYear(2400));
console.log(isLeapYear(2016));