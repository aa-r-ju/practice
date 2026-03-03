// function bracketCleaner(array) {
//   let obj = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   };
//   return array.reduce((acc, char) => {
//     let last = acc[acc.length - 1];
//     if (obj[last] === char) {
//       acc.pop();
//     } else {
//       acc.push(char);
//     }
//     return acc;
//   }, []);
// }
// console.log(bracketCleaner(["(", ")"]));
// console.log(bracketCleaner(["[", "]"]));
// console.log(bracketCleaner(["{", "}"]));
// console.log(bracketCleaner(["(", "}"]));

function isValidBrackets(array) {
  let obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];
  for (let val of array) {
    let last = stack[stack.length - 1];
    if (obj[last] === val) {
      stack.pop();
    } else {
      stack.push(val);
    }
  }
  return stack.length === 0;
}

console.log(isValidBrackets(["(", "{", "}", ")"])); //true
console.log(isValidBrackets(["(", "[", ")", "]"])); //false
console.log(isValidBrackets(["{", "(", ")", "[", "]", "}"])); //true
console.log(isValidBrackets(["(", "(", "[", "]", ")"])); // true
