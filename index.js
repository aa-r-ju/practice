//higher-order-function I
function addWorld(string) {
  return string + " World";
}
function callsWithHello(func) {
  return func("Hello");
}
let result = callsWithHello(addWorld);
console.log(result);
