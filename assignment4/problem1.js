/*
  Problem 1: Let’s play a mind game

  Sample Input & Output
  Input: 5
  Output: 7.5

  Input: 50
  Output: 75

  Input: 33
  Output: 49.5
*/

function mindGame(num) {
  if (typeof num !== "number" || num <= 0) {
    return "ERROR: Please enter a positive number";
  }
  const numToReturn = (num * 3 + 10) / 2 - 5; // operation according to the description
  return numToReturn;
}

console.log(mindGame(5));
console.log(mindGame(50));
console.log(mindGame(33));
