//ChatGpt challenges
//🔥 10 Advanced JavaScript Function Questions
// 1️⃣ Closure Basics

// What will this print and why?

function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const fn = outer();
console.log(fn());
console.log(fn());
console.log(fn());

//this will print 1 in each function call cause there is a counter variable inside the outer function so it will reset the function in every functioncall

//🚀 Let’s solve Q2 — Higher-Order Function.

//Write a function repeat(fn, n) that executes a function fn exactly n times.

function sayHi() {
  console.log("Hi Aarju");
}
// repeat(sayHi, 3);
// Output: Hi
//         Hi
//         Hi

function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}
repeat(sayHi, 3);

//Question 3 — Callback Function

// Write a function processArray(arr, callback) that applies the callback function to each element of arr and returns a new array.

// processArray([1,2,3], (x) => x * 2) → [2,4,6]

const call = (x) => x * 2;

function processArray(arr, callback) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let num = callback(arr[i]);
    newArray.push(num);
  }
  return newArray;
}
console.log(processArray([1, 2, 3], call));

//Question 4 — Function Returning Function

// Create a function multiplyBy(x) that returns another function.
// The returned function takes a number and multiplies it by x.

// Example:

// const double = multiplyBy(2);
// console.log(double(5)); // 10

function multiplyBy(x) {
  return function (num) {
    return num * x;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // 10

//🔥 Q5 — IIFE (Immediately Invoked Function Expression)

// What does this print?

(function () {
  let x = 10;
  console.log(x);
})();
console.log(typeof x);

// x does not exist outside the IIFE

// Using typeof x does NOT throw an error

// typeof x → returns "undefined" ✅

//Q6 — Default Parameter with Function
function greet(name = "Guest", msg = `Hello ${name}`) {
  console.log(msg);
}
greet();
greet("Aarju");

// First call: greet()

// name uses default → "Guest"

// msg uses default → "Hello Guest"

// Prints Hello Guest

// Second call: greet("Aarju")

// name is "Aarju"

// msg uses default → "Hello Aarju"

// Prints Hello Aarju

// ✅ Key Concept:

// Default parameters are used if the argument is undefined

// Template literals can use other parameters in the function

//Q7 — Code
function test() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
  }
}
test();
// Step-by-Step Explanation

// var i is function-scoped, not block-scoped.

// So all 3 arrow functions share the same i.

// The for loop runs synchronously:

// i = 0, 1, 2 → loop ends with i = 3

// setTimeout executes after 100ms (asynchronously):

// At that time, i = 3 for all 3 functions
