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

function groupByLength(str) {
  if (str === "") {
    return {};
  }

  return str
    .toLowerCase()
    .split(" ")
    .reduce((acc, char) => {
      if (!acc[char.length]) {
        acc[char.length] = [char];
      } else {
        acc[char.length].push(char);
      }
      return acc;
    }, {});
}

function frequencySortedString(str) {
  if (str === "") return "";

  const freq = str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => {
      if (char !== " ") acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});

  const resultArray = [];
  for (let char in freq) {
    for (let i = 0; i < freq[char]; i++) {
      resultArray.push(char);
    }
  }

  resultArray.sort((a, b) => freq[b] - freq[a]);

  return resultArray.join("");
}

console.log(frequencySortedString("aabbbbcc"));
