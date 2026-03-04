function zipStrings(...strings) {
  let miniString = strings[0].length;
  for (let s of strings) {
    if (s.length < miniString) {
      miniString = s.length;
    }
  }

  let result = "";
  for (let i = 0; i < miniString; i++) {
    for (let s of strings) {
      if (i < s.length) {
        result += s[i];
      }
    }
  }
  return result;
}

console.log(zipStrings("hello", "12"));
console.log(zipStrings("abc", "123"));
console.log(zipStrings("abc", "XYZ", "123"));
