function multiplyAll() {
  let values = Array.from(arguments);

  let all = 1;
  for (let i = 0; i < values.length; i++) {
    all *= values[i];
  }
  return all;
}
console.log(multiplyAll(2, 3, 4));
console.log(multiplyAll(5));
