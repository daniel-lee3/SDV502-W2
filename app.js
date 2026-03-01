var name = "Alice";     // Function-scoped, hoisted - avoid in modern JS
let age = 25;           // Block-scoped, can be reassigned
const PI = 3.14159;     // Block-scoped, cannot be reassigned

let score = 0;
score = 10;             // OK - reassignment allowed for let

const MAX = 100;
// MAX = 200;           // TypeError: Assignment to constant variable

let homeAddress = "In your walls"; // I declared the variable homeAddress and assigned a string value to it

console.log(`My name is ${name} and I live on ${homeAddress}`)