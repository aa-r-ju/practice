// 🔥 Question 4 (map vs filter confusion)
const nums = [1, 2, 3, 4];

const result = nums.map((num) => num > 2);
console.log(result);

// 👉 Why is this NOT filtering the array? What is the output?
//ans => This code does not filter the array because map() transforms each element into a boolean instead of removing elements. map() always returns a new array of the same length.
