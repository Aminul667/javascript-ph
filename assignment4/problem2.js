/*
Problem 2: Finding even or odd
Sample Input & Output:

Input: ‘Phero’
Output: odd

Input: ‘Batch7’
Output: even

Input: ‘chatgpt’
Output: odd
*/

// this function takes a string as a parameter and return a text "even" or "odd" according to the problem description.
function evenOdd(str) {
  if (typeof str !== "string") {
    return "ERROR: Please pass a string as a parameter.";
  }

  if (str.length % 2 === 0) {
    return "even";
  }
  return "odd";
}

console.log(evenOdd("Phero"));
console.log(evenOdd("Batch7"));
console.log(evenOdd("chatgpt"));
console.log(evenOdd(10));
