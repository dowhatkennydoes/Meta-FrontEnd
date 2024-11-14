//Declaring Strings

let singleQuoteString = 'Hello, world!';
let doubleQuoteString = "Hello, world!";
let templateLiterateString = `Hello, world!`;

console.log(singleQuoteString); // Output: Hello, world!
console.log(doubleQuoteString); // Output: Hello, world!
console.log(templateLiterateString); // Output: Hello, world!

//Concatenating (Combining) Strings

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Combines firstName and lastName
console.log(fullName); // Output: John Doe

//Using Template Literals (Backticks)
//Template literals allow you to embed variables directly into the string using ${}. This is cleaner and easier

let firstName2 = "Jane";
let lastName2 = "Smith";
let fullName2 = `${firstName2} ${lastName2}`; //Embeds firstName and lastName
console.log(fullName);

//Common String Methods
let text = "Hello";
console.log(text.length); // Output: 5

// .toUpperCase() and .toLowerCase()
let message = "Hello, World!";
console.log(message.toUpperCase()); // Output: HELLO, WORLD!
console.log(message.toLowerCase()); // Output: hello, world!

// .includes()
// Checks if a string contains a specific substring. Return true if it's found, false otherwise
let phrase = "The quick brown fox";
console.log(phrase.includes("quick")); // Output: true
console.log(phrase.includes("slow")); // Output: false

// .slice()
// Extracts a part of a string and returns it as a new string. 
// It takes two arguments: the starting index and the ending index (not inclusive)
let sentence = "JavaScript is fun!";
let part = sentence.slice(0, 10); // Gets characters from index 0 to 9
console.log(part); // Output: JavaScript

// .replace()
// Replaces a part of the string with another string. It only replaces the first occurence.

let greeting = "Hello, John!";
newGreeting = greeting.replace("John", "Jane");
console.log(newGreeting); //Output: Hello, Jane!

// Esxaping Characters
// If you need to use quotes inside a string,
// you can "escape" them wuth a backslash (\).
let quote = "She said, \"Hello!\"";
console.log(quote); // Output: she said, "Hello!"

// Multiline Strings
// With template literals (backticks), yopu can miltiline strings directly
let multilineString = `This is a string
that spans across
multiple lines.`;

console.log(multilineString);
/* Output:
This is a string
that spans across
multiple lines.
*/

//Example: Building a Greeting Message
// Here's an example using several string techniques to create a personalized greeting:
let firstName3 = "Kenny";
let age = 30;

let greetingMessage = `Hello, ${firstName3}! you are ${age} years old.`;
console.log(greetingMessage); // Output: Hello, Kenny! you are 30 years old.