function findOddSum(odd) {
  var sum = 0;
  var isOdd = 0;
  for (let i = 0; i < odd.length; i++) {
    if (odd[i] % 2 === 1) {
      sum += odd[i];
      isOdd = 1;
    }
  }
  if (isOdd === 1) {
    return sum;
  }
}

console.log(findOddSum([5, 7, 8, 10, 45, 30]));
