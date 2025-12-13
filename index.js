//Array I
let numbers = [1, 2, 3];
let names = ["George", "John", "Thomas"];
let aVariable = "a Value";
let mixedBag = [30, true, "apples", null, aVariable];

console.log(typeof names);
//Array.isArray
console.log(Array.isArray(numbers));
console.log(Array.isArray("i am not an Array"));

//Bracket Access
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

//Bracket Assignment
names[0] = "Ram";
names[1] = "Sita";
names[2] = "Laxman";
console.log(names);

//.length property
console.log(names.length);

//.push method
let newName = names.push("Bharat");
console.log(names);
console.log(newName);

//.pop method
let removeLastName = names.pop();
console.log(names);
console.log(removeLastName);

//.shift method
let removeFirstName = names.shift();
console.log(names);
console.log(removeFirstName);

//.unShift method
let addAtFirst = names.unshift("Narayan");
console.log(names);
console.log(addAtFirst);

//.indexOf method
console.log(names.indexOf("Narayan"));
console.log(names.indexOf("Shiv"));

//.slice method
let sliceName = names.slice(1, 2);
console.log(names);
console.log(sliceName);

let newArray = names.slice();
newArray[2] = "Radha";
newArray.push("saraswati");
console.log(names);
console.log(newArray);

//.includes method
console.log(newArray.includes("Ram"));
console.log(newArray.includes("Sita"));

//.reverse method
let prac = newArray.reverse();
console.log(newArray);
console.log(prac);

// const factorial = function fact(n) {
//   if (n === 1) return 1;
//   return n * fact(n - 1);
// };

// console.log(factorial(5)); // ✅ works
// // fact(5); // ❌ ReferenceError

const factorial = function (n) {
  if (n === 1) return 1;
  return console.log(n * factorial(n - 1));
};
factorial(9);

// const f = factorial;
// // factorial = null;
// f(5); // ❌ breaks

// let factorial = function (n) {
//   if (n === 1) return 1;
//   return console.log(n * factorial(n - 1));
// };

// const f = factorial;
// factorial = 9; // ✅ allowed with let
// f(5); // ❌ breaks

// console.log(factorial);
