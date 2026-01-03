// 🔥 Question 5 (reduce replacing map + filter)

// Without using map() or filter(), use only reduce() to get:

// Output:
[4, 8];

from: [1, 2, 3, 4];

// 👉 Write the reduce code

let arr = [1, 2, 3, 4];
let double = arr.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    acc.push(curr * 2);
  }
  return acc;
}, []);

console.log(double);
