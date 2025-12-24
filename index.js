//higher-order-function II
function greetMe() {
  console.log("Hi!");
}
function getGreeter() {
  return greetMe;
}
let greeter = getGreeter();
console.log(typeof greeter);
console.log(greeter);
greeter();
