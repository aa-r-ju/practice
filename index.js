//ChatGpt challenges
//Intermediate level questions
//1️⃣ What will this print and why?
function test(a, b) {
  console.log(a, b);
}
test(5);
//"this will print 5 undefined because there is no value for parameter b."

//❓ Q2. What is the output?
function fun(x = 10, y = x * 2) {
  return y;
}
console.log(fun());
//this will print 20 cause the value of x is 10 and value of y is x * 2 and x's default value is 10 so it convert into 10 and multiply with 2 so it became 20 and return 20

//🎯 Q3 — Your Next Question
// ❓ Write a function isEven(num) that returns:

// true → if the number is even

// false → if the number is odd

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(2));
console.log(isEven(3));

//🔥 Q4 — Next Question
// ❓ What will this print?
let count = 0;

function increase() {
  count++;
}

increase();
increase();
console.log(count);

//This will print 2 because the count variable is in the global scope, so it retains its value each time the function is called. If the count variable were inside the function, it would reset every time the function is called, and the output would always be 1.

//Q5 — Next Question (Bug Fix)
//❓ Why does this print undefined? Fix it.
function greet(name) {
  return "Hello " + name;
}

let msg = greet("Aarju");
console.log(msg);

// Before adding return, msg was undefined because the function didn’t return anything.
// After adding return, msg stores "Hello Aarju" and prints correctly.

//🔥 Q6 — Nested Function / Scope
function outer() {
  let x = 10;

  function inner() {
    return x + 5;
  }

  return inner();
}

console.log(outer());

//outer() defines x = 10 in its local scope.

// inner() is a nested function (closure) and can access variables from its outer scope.

// inner() returns x + 5 → 10 + 5 = 15.

// outer() returns the value of inner(), which is 15.

// console.log(outer()) prints 15.

// ✅ Key Concept: Closures allow inner functions to access outer function variables.

//🔥 Q7 — Arrow Function Conversion

// function multiply(a, b) {
//   return a * b;
// }
// Give your answer in arrow function syntax.

const multiply = (a, b) => a * b;
console.log(multiply(2, 3));

//🔥 Q8 — Return Statement Tricky
function show() {
  console.log("A");
  return "B";
  console.log("C");
}
console.log(show());

// console.log("A") → prints A

// return "B" → stops the function and returns "B"

// console.log("C") → never executes because the function already returned

// console.log(show()) → prints the returned value "B"

// ✅ Key Concept: Anything after return inside a function is unreachable.

//🔥 Q9 — Sum Array Function

// Write a function sumArray(arr) that returns the sum of all numbers in an array.

// Example:

// sumArray([1,2,3]) → 6

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3]));

//🔥 Q10 — Pass by Value vs Reference
let a = 10;

function change(a) {
  a = 20;
}

change(a);
console.log(a);
//a = 10 is a primitive value (number) stored in the global scope.When we call change(a), the function gets a copy of a (pass by value).Inside the function, a = 20 only changes the local copy, not the global a.console.log(a) prints the original value → 10.

// ✅ Key Concept: Primitives are passed by value in JavaScript.
// If it were an object, it would be passed by reference.
