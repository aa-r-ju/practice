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

function chainFunctions() {
  let values = Array.from(arguments);
  let result = values[0];
  let rest = values.splice(1);
  for (let i = 0; i < rest.length; i++) {
    result = rest[i](result);
  }
  return result;
}

const f1 = (x) => x + 2;
const f2 = (x) => x * 3;
const f3 = (x) => x - 1;

console.log(chainFunctions(5, f1, f2, f3));
console.log(chainFunctions(10, f1, f2, f3));
console.log(chainFunctions(10, f1));
