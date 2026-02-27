function consonantsCount(str) {
  let vowels = "aeiou";

  return str
    .toLowerCase()
    .split("")
    .reduce(
      (acc, char) => {
        if (char >= "a" && char <= "z" && !vowels.includes(char)) {
          acc[char] = (acc[char] || 0) + 1;
          acc.total++;
        }
        return acc;
      },
      { total: 0 },
    );
}

function characterFrequency(str) {
  return str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => {
      if (char !== " ") {
        acc[char] = (acc[char] || 0) + 1;
      }
      return acc;
    }, {});
}
console.log(characterFrequency(""));
console.log(characterFrequency("aab"));
console.log(characterFrequency("a a b"));
console.log(characterFrequency("Aa"));
