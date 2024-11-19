// if Statement
// The is statement checks a condition and runs a block of code only if that condition is true

let age = 18;

if (age >= 18){
    console.log("You are eligible to vote.");
}
// Output: You are eligible to vote.

// if...else Statement
/* The if...else statement allows you to specify an alternative block
   of code to run if the condition is false
*/
let age1 = 16;

if (age1 >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
// Output: You are not eligible to vote.

// if...else Statement
// The if...else statement allows you to specify an alternative block
// of code to run if the condition is false

let age2 = 16;

if (age2 >= 18){
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
// Output: You are not eligible to vote

// if...else if...else Statement
// The if...else if...else structure allows you to check multiple conditions in sequence.
// Once a condition is met, the corresponding block runs, and the rest are skipped.

let score = 85;

if (score >= 90){
    console.log("Grade: A");
}else if (score >= 80){
        console.log("Grade: B");
    }