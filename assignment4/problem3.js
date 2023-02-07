/*
  Problem 3: Is Less or Greater than seven
  Sample Input & Output:

  Input : 6
  Output: -1

  Input: -15
  Output: -22

  Input: 15
  Output: 30
*/

function isLGSeven(num) {
  if (typeof num !== "number") {
    return "ERROR: Please pass a number as a parameter.";
  }

  const difference = num - 7;
  if (difference < 7) {
    return difference;
  }
  return 2 * num;
}

console.log(isLGSeven(6));
console.log(isLGSeven(-15));
console.log(isLGSeven(15));
console.log(isLGSeven("6"));
