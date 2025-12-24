//higher-order-function II
function greeter() {
  let name = "Marie";
  let saysHi = function () {
    console.log("Hi!", name);
  };
  saysHi();
}
greeter();
