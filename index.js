function pigify(sentence) {
  let vowels = "aeiou";

  return sentence
    .toLowerCase()
    .split(" ")
    .map((word) => {
      let cluster = "";
      if (word.startsWith("sch")) {
        cluster += "sch";
      } else if (word.startsWith("qu")) {
        cluster += "qu";
      } else if (word.startsWith("squ")) {
        cluster += "squ";
      } else {
        let i = 0;
        while (i < word.length && !vowels.includes(word[i])) {
          cluster += word[i];
          i++;
        }
      }

      if (cluster === "") {
        return word + "ay";
      }

      return word.slice(cluster.length) + cluster + "ay";
    })
    .join();
}

console.log(pigify("apple"));
console.log(pigify("banana"));
console.log(pigify("cherry"));
console.log(pigify("eat pie"));
console.log(pigify("three"));
console.log(pigify("school"));
console.log(pigify("quiet"));
console.log(pigify("square"));
