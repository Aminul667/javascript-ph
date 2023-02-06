// Problem 4: Finding Bad data

function findingBadData(numbers) {
  let count = 0;
  for (const number of numbers) {
    if (number < 0) {
      count++;
    }
  }
  return count;
}

console.log(findingBadData([1, 2, 5]));
console.log(findingBadData([2, -5, -7, -13]));
console.log(findingBadData([-4, -9, -5, -33, -55]));
