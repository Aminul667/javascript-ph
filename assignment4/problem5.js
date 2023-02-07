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

function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {
  let totalDiamond = firstFriend * 21 + secondFriend * 32 + thirdFriend * 43;
  if (totalDiamond > 2 * 1000) {
    totalDiamond -= 2000;
  }
  return totalDiamond;
}

console.log(gemsToDiamond(1, 1, 1));
console.log(gemsToDiamond(20, 200, 50));
console.log(gemsToDiamond(100, 5, 1));
