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

function keyRemover(para) {
  return function (obj) {
    delete obj[para];
    return obj;
  };
}

const removeAge = keyRemover("age");
const obj = { name: "Aarju", age: 25 };
console.log(obj);
console.log(removeAge(obj));
console.log(obj);
