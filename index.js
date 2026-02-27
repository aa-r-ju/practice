function secondMostFrequentChar(str) {
  if (str === "") {
    return "";
  }
  let count = str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => {
      if (char !== " ") {
        acc[char] = (acc[char] || 0) + 1;
      }

      return acc;
    }, {});

  let firstMax = 0;
  let secondMax = 0;
  let firstChar = "";
  let secondChar = "";

  for (let key in count) {
    if (count[key] > firstMax) {
      secondMax = firstMax;
      secondChar = firstChar;

      firstMax = count[key];
      firstChar = key;
    } else if (count[key] > secondMax) {
      secondMax = count[key];
      secondChar = key;
    }
  }
  return secondChar;
}
console.log(secondMostFrequentChar("aabbbbcc"));
