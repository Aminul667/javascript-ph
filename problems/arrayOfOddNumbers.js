function oddArray(numbers) {
  oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      oddNumbers.push(numbers[i]);
    }
  }
  return oddNumbers;
}

console.log(oddArray([10, 11, 12, 13, 15]));
