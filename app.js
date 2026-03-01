var name = "Alice";     // Function-scoped, hoisted - avoid in modern JS
let age = 25;           // Block-scoped, can be reassigned
const PI = 3.14159;     // Block-scoped, cannot be reassigned

let score = 0;
score = 10;             // OK - reassignment allowed for let

const MAX = 100;
// MAX = 200;           // TypeError: Assignment to constant variable

let homeAddress = "your walls"; // I declared the variable homeAddress and assigned a string value to it

console.log(`My name is ${name} and I live in ${homeAddress}`)

console.log(typeof homeAddress)

// Arithmetic
5 + 3 // 8
20 - 4 // 6
4 * 3 // 12
9 / 2 // 4.5
9 % 2 // 1
2 ** 3 // 8

// Comparison - always prefer === over ==
5 === 5 // true
5 !== 3 // true (strict: checks type + value)
5 == "5" // true
5 === "5" // false (loose vs strict)
10 > 3 // true
4 <= 4 // true

// Logical
true && false // false
true || false // true
!true // false

// Assignment shorthands
let x = 10;
x += 5; //15
x -= 2; // 13
x *= 2; // 26