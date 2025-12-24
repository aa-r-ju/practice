//higher-order-function II

function getGreeter() {
  function greetMe() {
    console.log("Hi!");
  }
  return greetMe;
}
let greeter = getGreeter();
greeter();
