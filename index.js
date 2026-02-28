function frequencySortedString(str) {
  if (str === "") {
    return "";
  }

  let testing = str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => {
      if (char !== " ") {
        acc[char] = (acc[char] || 0) + 1;
      }
      return acc;
    }, {});

  let resultArray = [];
  for (let key in testing) {
    for (let i = 0; i < testing[key]; i++) {
      resultArray.push(key);
    }
  }
  resultArray.sort((a, b) => testing[b] - testing[a]);
  return resultArray.join("");
}
