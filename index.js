// 🔥 Question 2 (filter truthy / falsy)
const arr = [0, 1, false, 2, "", 3];

const result = arr.filter(Boolean);
console.log(result);

// 👉 What will be printed and why does this work
//filter(Boolean) removes all falsy values from an array because Boolean converts each element to true or false, and filter keeps only the elements that evaluate to true.
