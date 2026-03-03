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
console.log(bracketCleaner(["(", ")"]));
console.log(bracketCleaner(["[", "]"]));
console.log(bracketCleaner(["{", "}"]));
console.log(bracketCleaner(["(", "}"]));
