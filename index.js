function bracketCleaner(array) {
  let obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  return array.reduce((acc, char) => {
    let last = acc[acc.length - 1];
    if (obj[last] === char) {
      acc.pop();
    } else {
      acc.push(char);
    }
    return acc;
  }, []);
}

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

function removeConsecutiveDuplicates(array) {
  return array.reduce((acc, char) => {
    let last = acc[acc.length - 1];
    if (char !== last) {
      acc.push(char);
    }
    return acc;
  }, []);
}
console.log(removeConsecutiveDuplicates([1, 1]));
console.log(removeConsecutiveDuplicates([1, 1, 2, 2]));
console.log(removeConsecutiveDuplicates([1, 2, 1]));
console.log(removeConsecutiveDuplicates([1, 1, 2, 3, 3, 3, 2, 2]));
