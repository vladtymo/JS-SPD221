// -------- console
console.log("Some information message!");
console.warn("Some warning message!");
console.error("Some error message!");

// ------- data types
let number = 10;            // number
let koef = 7.5;             // number

let len = 10000000000000n;  // BigInt

let login = "super1122";    // string
let letter = 'A';           // string

let isValid = true;         // boolean

let emptyVariable = null;   // null
let undefinedVariable;      // undefined

let coord = { x: 10, y: -1 };
let array = [1, 2, 3, "red", false, [33, 44], { id: 999, code: "0242" }, () => { console.log("Func!"); }];

console.log("First:", array[0]);
console.log("Code:", array[6].code);
array[7]();

// get element type
console.log(typeof number);

// weak/dynamic/duck typing 
number = "10$"; // change number type to string

console.log(typeof number);

// ------------- statements
if (5 > 10) { }
else { }

switch (number) {
    case 0:
        break;
    default:
        break;
}

for (let i = 0; i < 10; i++) { }

// ------- browser dialogs
alert("Some alert message!");

let email = prompt("Enter your email:");
// string concatenation: str + str
console.log("Your email: " + email + "!");
// string interpolation: `${str} ${str}`
console.log(`Your email: ${email}!`);

// convert string to number: +string Number(string)
let year = +prompt("Enter current year:");

// NaN - Not a Number
if (isNaN(year)) console.warn("Invalid year format!");

console.log(`Current year: ${year}!`);
console.log(`Next year: ${year + 1}!`);

let like = confirm("Do you like JS?");

// thernary operator: condition ? true-value : false-value
console.log(`You are ${like ? "superman" : ".NET developer"}!`);
document.body.innerHTML += `<p>You are ${like ? "superman" : ".NET developer"}!</p>`;

// ------------ operators
// ariphmetic: + - * / % **
// logic: > < >= <= != == !== === ! && ||
