//Find the first non-repeating character in a string

// let input = "google";
// Output: "l";

function uniqueChar(input) {
  let obj = {};
  // for (let i = 0; i < input.length; i++) {
  //   console.log(input[i]);
  // }
  for (let char of input) {
    obj[char] = (obj[char] || 0) + 1;
  }

  for (let char of input) {
    if (obj[char] === 1) {
      return char;
    }
  }
}
console.log(uniqueChar("google"));
