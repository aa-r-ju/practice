function callAndReturn(fun) {
  return fun();
}
const hello = () => {
  return "Hello!";
};

console.log(callAndReturn(hello));

function callAllFunctions() {
  let values = Array.from(arguments);
  let concat = "";
  for (let i = 0; i < values.length; i++) {
    concat += values[i]();
  }
  return concat;
}
const f1 = () => "A";
const f2 = () => "B";
const f3 = () => "C";
console.log(callAllFunctions(f1, f2, f3));

function callWithArguments() {
  let values = Array.from(arguments);
  let fn = values[0];
  let val = values.slice(1);
  return fn(...val);
}
const sum = (a, b) => a + b;
const product = (a, b) => a * b;

console.log(callWithArguments(sum, 2, 3));
console.log(callWithArguments(product, 2, 3));
