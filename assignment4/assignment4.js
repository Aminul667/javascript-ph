/*
  Problem 1: Let’s play a mind game

  Sample Input & Output
  Input: 5
  Output: 7.5

  Input: 50
  Output: 75

  Input: 33
  Output: 49.5
*/

// this function takes a parameter as input and returns a number as output according to the problem description.
function mindGame(num) {
  if (typeof num !== "number" || num <= 0) {
    return "ERROR: Please pass a positive number as a parameter";
  }
  const numToReturn = (num * 3 + 10) / 2 - 5;
  return numToReturn;
}

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

// this function takes a string as a parameter and returns a text "even" or "odd" according to the problem description.
function evenOdd(str) {
  if (typeof str !== "string") {
    return "ERROR: Please pass a string as a parameter.";
  }

  if (str.length % 2 === 0) {
    return "even";
  }
  return "odd";
}

/*
  Problem 3: Is Less or Greater than seven
  Sample Input & Output:

  Input : 6
  Output: -1

  Input: -15
  Output: -22

  Input: 15
  Output: 30
*/

// this function takes a number as a parameter and returns a number either subtracting the number from 7 or multiplying the number by 2 according to the problem description.
function isLGSeven(num) {
  if (typeof num !== "number") {
    return "ERROR: Please pass a number as a parameter.";
  }

  const difference = num - 7;
  if (difference < 7) {
    return difference;
  }
  return 2 * num;
}

/*
  Problem 4: Finding Bad data
  Sample Input & Output:-

  Input: [1, 2, 5]
  Output: 0

  Input: [2, -5, -7, -13]
  Output: 3

  Input: [-4, -9, -5, -33, -55]
  Output: 5
*/

// this function takes an array as an input parameter and returns the total number of negative values in the array according to the problem description.
function findingBadData(aryOfNumbers) {
  if (typeof aryOfNumbers !== "object" || aryOfNumbers.length === 0) {
    return "ERROR: Please pass a non-empty array as a parameter.";
  }

  let countBadData = 0;
  for (const number of aryOfNumbers) {
    if (number < 0) {
      countBadData++;
    }
  }
  return countBadData;
}

/*
  Problem 5: Convert your gems into diamond
  Sample Input & Output:-

  Input: 1, 1, 1
  Output: 96

  Input: 20, 200, 50
  Output: 6970

  Input: 100, 5, 1
  Output: 303
*/

// this function takes three numbers as parameters and returns a number according to the problem description
function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {
  if (
    typeof firstFriend !== "number" ||
    typeof secondFriend !== "number" ||
    typeof thirdFriend !== "number"
  ) {
    return "Invalid parameter has been passed.";
  }

  let totalDiamond = firstFriend * 21 + secondFriend * 32 + thirdFriend * 43;
  if (totalDiamond > 2 * 1000) {
    totalDiamond -= 2000;
  }
  return totalDiamond;
}


/*
------------------------------------------------------------------------------

                            End Of Assignment 4

-----------------------------------------------------------------------------
*/