//higher-order-function II

function getGreeter() {
  return function (name) {
    console.log("Hi!", name);
  };
}
let greeter = getGreeter();
greeter("Marie");
greeter("Rosalind");
greeter();
