// -------- create array using Array()
var array = new Array(10); // 10 undefined items

// set value
array[0] = 100;
array[1] = 200;
array[2] = 300;

console.log("Array length:", array.length);
console.log("Array: " + array);

var array = new Array(3, 6, 10, -3, 485); // 5 initialized items
console.log("Array: " + array);

// -------- create array using []
var array = []; // empty array
var array = [4, 6, 123, 1, 604, -4, 0, 123, 44];

console.log("Array: " + array);
console.log("Array length:", array.length);

console.log("First item: " + array[0]);
console.log("Last item: " + array[array.length - 1]);

array[20] = 777;
console.log("Element 20: " + array[20]);
console.log("Array length:", array.length);

// -------- iterate array
console.warn("primary for example");
for (let i = 0; i < array.length; i++) {
    console.log(array[i] + " ");
}

console.warn("for of example");
// for of - show all collection values
for (const item of array) {
    // item - copy, cannot change the original value
    console.log(item);
}

console.warn("for in example");
// for in - show all existing indexes 
for (const item in array) {
    console.log(item);
}

console.warn("forEach() example");
array.forEach((item) => {
    console.log(item);
})

// -=-=-=-=-=-=- Array Methods -=-=-=-=-=-=-
console.log("Original Array: ", array);

array.push(777); // add element to the end
console.log("Array:", array);

array.pop(); // remove the last element
console.log("Array:", array);

array.shift(); // remove the first element
console.log("Array:", array);

array.unshift(555); // add to the beginning
console.log("Array:", array);

console.log("Index of first 123:", array.indexOf(123));  // if not found = -1
console.log("Index of last 123:", array.lastIndexOf(123));

console.log("Found:", array.find((elem) => elem < 0));
console.log("Found index:", array.findIndex((elem) => elem < 0));

array.sort();
console.log("Sorted by default:", array);

// compare result:
// 0 - items are equals
// <0 - less
// >0 - bigger
array.sort((a, b) => a - b);
console.log("Sorted with custom func:", array);

array.splice(2, 3); // 3 element from index 2
console.log("After remove:", array);

const copy = array.slice(1, array.length - 1);
console.log("Copied array:", copy);

array = [4, 6, 8, 1, 13, 16, -4, 0, 99];

const filtered = array.filter((el) => el % 2 == 0);
console.log("Filtered array:", filtered);

const colors = ['red', 'brown', 'green', 'gold', 'silver'];

const str = colors.join(" - ");
console.log("Str after join: ", str);

array.reverse();
console.log("After reverse:", array);

const mapped = array.map((i, ind) => `${i}!!!`);
console.log("Mapped:", mapped);

// const filled = array.fill(1, 2, 6);
// console.log("Filled:", filled);

array = [4, 6, 8, 1, 13, 16, -4, 0];

// 4 + 6 + 8 ...
const result = array.reduce((result, item) => {
    return result + item;
}, 0);
console.log(result);

const max = array.reduce((prev, curr) => curr > prev ? curr : prev, array[0]);
console.log("Max:", max);
