//higher-order-function II
function getGreeter() {
  console.log("getGreeter is running");

  let name = "Marie";

  console.log("getGreeter is finishing");
  return function () {
    console.log("Hi!", name);
  };
}

let greeter = getGreeter();
greeter();
