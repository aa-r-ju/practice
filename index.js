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

function wordCanceller(array) {
  return array.reduce((acc, char) => {
    let last = acc[acc.length - 1];
    if (char === "STOP") {
      acc.pop();
    } else {
      acc.push(char);
    }
    return acc;
  }, []);
}

console.log(wordCanceller(["GO", "STOP"]));
console.log(wordCanceller(["GO", "LEFT", "STOP"]));
console.log(wordCanceller(["A", "B", "STOP", "STOP"]));
