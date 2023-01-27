var num1 = 13;
var num2 = 79;
var num3 = 45;

var a = 9;
var b = 8;
var c = 9;

if (num1 > num2 && num1 > num3){
    console.log(num1);
}
else if (num2 > num1 && num2 > num3){
    console.log(num2);
}
else{
    console.log(num3);
}

// 2
if (a === b || a === c || b === c){
    console.log("Isosceles")
}