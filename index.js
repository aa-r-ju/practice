function callAndReturn(fun) {
  return fun();
}
const hello = () => {
  return "Hello!";
};

console.log(callAndReturn(hello));
