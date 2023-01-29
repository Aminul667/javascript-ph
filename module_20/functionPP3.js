function make_avg(numbers, length) {
  var sum = 0;
  for(let number = 0; number < length; number++) {
    sum = sum + numbers[number];
  }
  return sum;
}

const numAry = [10, 20, 10];

console.log(make_avg(numAry, numAry.length))