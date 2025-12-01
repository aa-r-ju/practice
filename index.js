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

//function can have more that one parameters and aruguements
function greeing(firstName, lastName) {
  console.log("Hello", firstName, lastName);
}
greeing("Gaby", "Medina");
//what happens if we do npt pass in an arguments
greeing("Shila");

//what happens if we pass in too many arguements
greeing("Mina", "devi", "kc");

//Returning values
function getANum() {
  return 10;
}
let aNum = getANum();
console.log(aNum);

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
  console.log("I will never run");
}
let first = "Alan";
let last = "Turing";
let fullName = getFullName(first, last);
console.log(fullName);

//what if we forget to return
function getFullName1(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  console.log("fullname:", fullName);
}
let returnedvalue = getFullName1("Julia", "Liuson");
console.log(returnedvalue);
