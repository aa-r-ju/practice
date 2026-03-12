function multiplier(num) {
  return function (val) {
    return num * val;
  };
}

let double = multiplier(2);
let triple = multiplier(3);

console.log(double(5));
console.log(double(10));

console.log(triple(5));
