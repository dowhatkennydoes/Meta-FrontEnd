// let is used for variables that may change later.
// const is for variables that should stay constant (won't change)
// var is the old way to declare variables but is less commonly used today.

let age = 25; // Declares a variable called age
console.log(age); // Output: 25

age = 26; // You can change the value of a variable.
console.log(age); // Output: 26

const birthYear = 1998; // Declares a constant called birthYear
console.log(birthYear); // Output: 1998

// birthYear = 2000; // This would cause an error because you can't reassign a constant

var name = "Alice";
console.log(name); // Output: Alice

name = "Bob"; // You can change the value of a variable
console.log(name); // Output: Bob

let score = 95;
console.log(score); // Output: 95

let greeting = "Hello, World!";
console.log(greeting); // Output: Hello, World!

let isStudent = true;
console.log(isStudent); // Output: true

isStudent = false; // Changing the value
console.log(isStudent); // Output: false

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Concatenates firstName and lastName
console.log(fullName); // Output: John Doe

let x = 10;
let y = 5;

let sum = x + y; // Adds x and y
console.log(sum); // Output: 15

let product = x * y; // Multiplies x and y
console.log(product); // Output: 50