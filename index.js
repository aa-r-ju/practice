// 🔥 Question 1 (map trap)
const arr = [1, 2, 3];

const result = arr.map((num) => {
  num * 2;
});

console.log(result);

// 👉 What is the output and WHY?
// ans => The callback function does not return any value because curly braces are used without a return statement, so map() fills the resulting array with undefined.
