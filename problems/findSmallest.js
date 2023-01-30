function findingSmallest(numbers) {
  var smallest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }
  return smallest;
}

console.log(findingSmallest([10, 33, 5, 99, 6]));
