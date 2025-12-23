//higher-order-function I
function sayHi(name) {
  console.log("Hi!,", name);
}
function sayBye(name) {
  console.log("Bye:)", name);
}
function callsWithName(name, callback) {
  callback(name);
}
callsWithName("Sadie", sayHi);
callsWithName("Sadie", sayBye);
