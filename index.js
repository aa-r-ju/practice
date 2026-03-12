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

let check = propertyChecker("name");
console.log(check({ name: "Aarju" }));
console.log(check({ age: 99 }));
