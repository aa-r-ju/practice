//Function
function imAFunction() {
  console.log("I am inside a function");
}
console.log("before the function");
imAFunction();
console.log("after the function");

//using parameters and arguments to the function.
function hello(name) {
  console.log("Hello", name);
}
hello("sadie");

//calling the function multiple times
hello("David");
hello("Nimit");
let notAName = "world";
hello(notAName);
