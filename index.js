// 🔥 Question 3 (reduce without initial value)
const nums = [5, 10, 15];

const result = nums.reduce((acc, curr) => {
  return acc + curr;
});

console.log(result);

// 👉 What is acc and curr in the first iteration?
//ans => Without an initial value, reduce assigns the first array element to the accumulator and begins iteration from the second element.
