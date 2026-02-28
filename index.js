function pigify(str) {
  if (str === "") return "";

  const vowels = "aeiou";

  return str
    .split(/(\s+)/) // preserve multiple spaces
    .map((word) => {
      // Skip pure spaces
      if (word.trim() === "") return word;

      // Separate punctuation at end
      let punctuation = "";
      if (/[^a-zA-Z0-9]$/.test(word)) {
        punctuation = word.slice(-1);
        word = word.slice(0, -1);
      }

      const originalWord = word;

      // Treat "yt" and "xr" as vowel sounds
      if (
        word.toLowerCase().startsWith("yt") ||
        word.toLowerCase().startsWith("xr")
      ) {
        return originalWord + "ay" + punctuation;
      }

      let cluster = "";
      let i = 0;

      while (i < word.length && !vowels.includes(word[i].toLowerCase())) {
        // special handling for "qu"
        if (
          word[i].toLowerCase() === "q" &&
          word[i + 1]?.toLowerCase() === "u"
        ) {
          cluster += word.slice(i, i + 2);
          i += 2;
          break;
        }

        cluster += word[i];
        i++;
      }

      if (cluster === "") {
        return originalWord + "ay" + punctuation;
      }

      let transformed = word.slice(cluster.length) + cluster + "ay";

      // Preserve capitalization
      if (originalWord[0] === originalWord[0].toUpperCase()) {
        transformed = transformed[0].toUpperCase() + transformed.slice(1);
      }

      return transformed + punctuation;
    })
    .join("");
}
// console.log(pigify(""));
// console.log(pigify("a"));
// console.log(pigify("b"));
// console.log(pigify("Apple"));
// console.log(pigify("Banana"));
// console.log(pigify("hello!"));
console.log(pigify("Hello world!"));
console.log(pigify("eat   pie"));
// console.log(pigify("h3llo"));
// console.log(pigify("rhythms"));
// console.log(pigify("strength"));
// console.log(pigify("yttria"));
// console.log(pigify("xray"));
