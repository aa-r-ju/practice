//higher-order-function I
function callsAFunction(anotherFunction) {
  anotherFunction();
}
function happyFunction() {
  console.log("I am a callback function");
}
callsAFunction(happyFunction);
