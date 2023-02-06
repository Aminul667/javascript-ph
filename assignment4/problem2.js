// Problem 2: Finding even or odd

function evenOdd(str) {
  if (typeof str !== "string") {
    return "ERROR: Please pass a string as a parameter.";
  }

  if (str.length % 2 === 0) {
    return "Even";
  }
  return "Odd";
}

console.log(evenOdd("Phero"));
console.log(evenOdd("Batch7"));
console.log(evenOdd("chatgpt"));
console.log(evenOdd(10));
