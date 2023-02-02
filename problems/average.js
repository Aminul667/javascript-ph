function average(arrOfMarks) {
  sum = 0;
  for (let i = 0; i < arrOfMarks.length; i++) {
    sum += arrOfMarks[i];
  }
  avg = Math.round((sum / arrOfMarks.length) * 100) / 100;
  return avg;
}

console.log(average([75.25, 65, 80, 35.45, 99.5]));
console.log(average([100, 100, 100, 100, 100]));
