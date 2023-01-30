function findLeapYear(year) {
  leapYears = [];
  for (let i = 0; i < year.length; i++) {
    if ((year[i] % 4 === 0 && year[i] % 100 !== 0) || year[i] % 400 === 0) {
      leapYears.push(year[i]);
    }
  }
  return leapYears;
}

console.log(findLeapYear([2023, 2024, 2025, 2028, 2030]));
