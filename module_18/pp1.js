var fruits = ["Apple", "Banana", "Orange"];
var index = fruits.indexOf("Banana");

console.log(index);

fruits[index] = "Mango";

console.log(fruits);

fruits.pop();
fruits.push("Watermelon");

console.log(fruits);