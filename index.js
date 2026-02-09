function sumAll() {
  let values = Array.from(arguments);
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  return sum;
}
console.log(sumAll(1, 2, 3, 4));
