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

function cancelOutZeroSum(array) {
  return array.reduce((acc, char) => {
    let last = acc[acc.length - 1];

    if (last !== undefined && last + char === 0) {
      acc.pop();
    } else {
      acc.push(char);
    }
    return acc;
  }, []);
}

console.log(cancelOutZeroSum([3, -3]));
console.log(cancelOutZeroSum([2, -2, 5]));
console.log(cancelOutZeroSum([1, 2, -2, -1]));
console.log(cancelOutZeroSum([5, 3, -3, 2]));
