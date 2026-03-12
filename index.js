function multiplier(num) {
  return function (val) {
    return num * val;
  };
}

function propertyChecker(para) {
  return function (obj) {
    return para in obj;
  };
}

function counterFactory() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

let coo = counterFactory();
console.log(coo());
console.log(coo());
console.log(coo());
console.log(coo());
console.log(coo());
