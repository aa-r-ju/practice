function onlyStrings() {
  let values = Array.from(arguments);
  let str = "";

  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === "string") {
      str += values[i];
    }
  }
  return str;
}

console.log(onlyStrings("Hi", 1, " ", true, "there"));
