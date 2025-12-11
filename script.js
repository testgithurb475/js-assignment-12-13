// Question 2

var num1 = +prompt("Enter first integer:");
var num2 = +prompt("Enter second integer:");

if (num1 > num2) {
    alert(num1 + " is larger.");
}
else if (num2 > num1) {
    alert(num2 + " is larger.");
}
else {
    alert("Both numbers are equal.");
}
//  Question 3

var number = +prompt("Enter a number:");

if (number > 0) {
    alert("The number is POSITIVE.");
}
else if (number < 0) {
    alert("The number is NEGATIVE.");
}
else {
    alert("The number is ZERO.");
}

// Question 4

var char = prompt("Enter a single character:");

if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    alert(true);
} else {
    alert(false);
}

// Question 5

var password = "password123";
var userPassword = prompt("Enter your password")

if (!userPassword){
    alert("Please enter your password");
} else if (userPassword == password){
    alert("Correct password");
} else {
    alert("Incorrect password");
}

// Question 6

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else {
greeting = "Good evening";
}

// Question 7

let time = +prompt("Enter time in 24-hour format (e.g., 1900):");

if (time >= 0 && time < 12) {
    alert("Good Morning!");
}
else if (time >= 12 && time < 16) {
    alert("Good Afternoon!");
}
else if (time >= 16 && time < 21) {
    alert("Good Evening!");
}
else if (time >= 21 && time <= 2359) {
    alert("Good Night!");
}
else {
    alert("Invalid time format!");
}