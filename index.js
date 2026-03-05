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

function alternateCaseMerge(str1, str2) {
  let maxLength = Math.max(str1.length, str2.length);
  let result = "";

  for (let i = 0; i < maxLength; i++) {
    if (i < str1.length) {
      result += str1[i].toLowerCase();
    }

    if (i < str2.length) {
      result += str2[i].toUpperCase();
    }
  }

  return result;
}

function columnRead(...string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    result += string[i];
  }
  return result;
}
console.log(columnRead("abc", "XYZ"));
console.log(columnRead("a", "b", "c"));
