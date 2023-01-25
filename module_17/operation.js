var a = 10;
var b = 20.5;

var addition = a + b;
var subtraction = b - a;
var division = b / a;
var multiplication = a * b;
var modular = b % 2;

console.log("addition: ", addition);
console.log("subtraction: ", subtraction);
console.log("division: ", division);
console.log("multiplication: ", multiplication);
console.log("modular: ", modular);

addition += 1;
subtraction -= 1;
division /= 1;
multiplication *= 1;

console.log("after: ")
console.log("addition: ", addition);
console.log("subtraction: ", subtraction);
console.log("division: ", division);
console.log("multiplication: ", multiplication);

var firstName = "Hello"
var lastName = "World"
var fullName = firstName + " " + lastName

console.log(fullName)