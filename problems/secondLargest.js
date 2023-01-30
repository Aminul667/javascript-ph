function secondLargest(numbers) {
  let largest = numbers[0];
  let secndLargest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  for (let j = 1; j < numbers.length; j++) {
    if (numbers[j] > secndLargest && j !== numbers.indexOf(largest)) {
      secndLargest = numbers[j];
    }
  }
  return secndLargest;
}

console.log(secondLargest([10, 33, 5, 99, 6]));
