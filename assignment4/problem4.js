/*
  Problem 4: Finding Bad data
  Sample Input & Output:-

  Input: [1, 2, 5]
  Output: 0

  Input: [2, -5, -7, -13]
  Output: 3

  Input: [-4, -9, -5, -33, -55]
  Output: 5
*/

function findingBadData(aryOfNumbers) {
  let countBadData = 0;
  for (const number of aryOfNumbers) {
    if (number < 0) {
      countBadData++;
    }
  }
  return countBadData;
}

console.log(findingBadData([1, 2, 5]));
console.log(findingBadData([2, -5, -7, -13]));
console.log(findingBadData([-4, -9, -5, -33, -55]));
