//higher-order-function II

function getGreeter() {
  return function () {
    console.log("Hi!");
  };
}
let greeter = getGreeter();
greeter();
