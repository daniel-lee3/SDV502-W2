//var name = "Alice";     // Function-scoped, hoisted - avoid in modern JS
//let age = 25;           // Block-scoped, can be reassigned
const PI = 3.14159;     // Block-scoped, cannot be reassigned

// let score = 0;
// score = 10;             // OK - reassignment allowed for let

const MAX = 100;
// MAX = 200;           // TypeError: Assignment to constant variable

let homeAddress = "your walls"; // I declared the variable homeAddress and assigned a string value to it

// console.log(`My name is ${name} and I live in ${homeAddress}`)

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

const msg = "Hello, JavaScript!";

msg.length                  // 18
msg.toUpperCase()           // HELLO, JAVASCRIPT!
msg.toLowerCase()           // hello, javascript!
msg.includes("Java")        // true
msg.startsWith("He")        // true
msg.indexOf("Java")         // 7
msg.slice(7, 17)            // "JavaScript"
msg.replace("Hello", "Hi")  // "Hi, JavaScript!"
msg.split(", ")             // ["Hello", "JavaScript!"]
"    hi    ".trim()         // "hi"

console.log(`The length of msg is = ${msg.length}`);

console.log(msg.toUpperCase())

const name = "Dan";
const age = 19;

// Old way - concatenation (error-prone)
const msg1 = "Hello, " + name + " You are " + age + " years old.";

// New way - template literal (clean and readable)
const msg2 = `Hello, ${name} You are ${age} years old.`;

// Multi-line strings
// const html = `
//     <div class="card">
//         <h2>${name}</h2>
//         <p>Age: ${age}</p>
//     </div>
// `;

// Any expression works inside ${}
const total = `Price: ${(12.99 * 3).toFixed(2)}`; // "Price: 38.97"

// if / else if / else
const score = 75;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C")
} else {
    console.log("D")
}

// switch - great for exact matches
const day = "Monday";
switch (day) {
    case "Monday":
    case "Tuesday":
        console.log("Start of week");
        break;
    case "Friday":
        console.log("TGIF");
        break;
    default:
        console.log("Midweek")
}