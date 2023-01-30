function countZeros(binary_num) {
  var count = 0;
  for (let i = 0; i < binary_num.length; i++) {
    if (binary_num[i] == 0) {
      count += 1;
    }
  }
  return count;
}

console.log(countZeros("10101"));
