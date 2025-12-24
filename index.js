//higher-order-function II
function getGreeter(name) {
  return function () {
    console.log("Hi", name);
  };
}

let greeter = getGreeter("Rosalind");
greeter();
