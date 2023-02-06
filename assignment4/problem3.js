// Problem 3: Is Less or Greater than seven

function isLGSeven(num) {
  if (typeof num !== "number") {
    return "ERROR: Please pass a number as a parameter.";
  }

  const difference = num - 7;
  const absDifference = Math.abs(num - 7);
  if (absDifference < 7) {
    return difference;
  }
  return 2 * absDifference;
}

console.log(isLGSeven(6));
console.log(isLGSeven(-15));
console.log(isLGSeven(13));
console.log(isLGSeven("6"));
