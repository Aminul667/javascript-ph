function tallestFriend(height) {
  var tallest = height[0];
  for (let i = 1; i < height.length; i++) {
    if (height[i] > tallest) {
      tallest = height[i];
    }
  }
  return tallest;
}

console.log(tallestFriend([157, 134, 188]));

// https://www.jschallenger.com/?ref=java5cript.com
