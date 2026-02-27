function mostFrequentChar(str) {
  if (str === "") {
    return "";
  }
  const counts = str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => {
      if (char !== " ") {
        acc[char] = (acc[char] || 0) + 1;
      }
      return acc;
    }, {});

  let maxchar = "";
  let maxCount = 0;
  for (let keys in counts) {
    if (maxCount < counts[keys]) {
      maxCount = counts[keys];
      maxchar = keys;
    }
  }
  return maxchar;
}
console.log(mostFrequentChar("aabbbccccc"));
console.log(mostFrequentChar(""));
console.log(mostFrequentChar("aabbbbcc"));
console.log(mostFrequentChar("AaBBb"));
