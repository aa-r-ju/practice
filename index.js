//simple for loops practice
let letters = "world";
console.log(letters[0]);
console.log(letters[4]);
console.log(letters[5]);
console.log(letters.length);
console.log(letters.toUpperCase());
console.log(letters[2].toUpperCase());
// console.log(letters[5].toUpperCase());
//string in a for loop
for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}
let evenLetters = "";
for (let i = 0; i < letters.length; i++) {
  if (i % 2 === 0) {
    evenLetters += letters[i];
  }
}
console.log(evenLetters);

for (let i = 0; i < letters.length; i++) {
  if (letters[i] === "r") {
    continue;
  }
  console.log(letters[i]);
}

for (let i = 0; i < letters.length; i++) {
  if (letters[i] === "r") {
    break;
  }
  console.log(letters[i]);
}
