function callTwice(fun) {
  let first = fun();
  let second = fun();
  return second;
}
const fn1 = () => "Hi";
let count = 0;
const fn = () => ++count;
console.log(callTwice(fn));
console.log(callTwice(fn1));
