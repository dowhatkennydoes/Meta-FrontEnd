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