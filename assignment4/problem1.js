// Problem 1: Let’s play a mind game

function mindGame(num) {
  if (typeof num !== "number") {
    return "ERROR: Please enter a number";
  }
  const numToReturn = (num * 3 + 10) / 2 - 5;
  return numToReturn;
}

console.log(mindGame(5));
console.log(mindGame(50));
console.log(mindGame(-33));
