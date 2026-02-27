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
