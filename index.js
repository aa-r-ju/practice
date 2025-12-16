//Array II
let names = ["George", "John", "Thomas"];
let singleTermPresident = names.splice(1, 1);
console.log(names);
console.log(singleTermPresident);

let names1 = ["Paul", "George", "John", "Thomas"];
let acrossTheUniverse = names1.splice(1, 2);
console.log(names1);
console.log(acrossTheUniverse);

//add new elements to the index
let names2 = ["Paul", "George", "Pete", "John"];
let formerMembers = names2.splice(2, 1, "Ringo");
console.log(names2);
console.log(formerMembers);

//you don't have to remove any elements
let names3 = ["Paul", "George", "Ringo", "John"];
let removeElements = names3.splice(2, 0, "Pete", "Stuart");
console.log(names3);
console.log(removeElements);

//.join method
let names4 = ["Paul", "George", "Ringo", "John"];
let joinedString = names4.join();
console.log(names4);
console.log(joinedString);

let names5 = ["Paul", "George", "Ringo", "John"];
let jointMethod = names5.join(" and ");
console.log(names5);
console.log(jointMethod);

//concat merges two or more arrays into one
let older = ["Ringo", "John"];
let younger = ["Paul", "George"];
let allTogetherNow = older.concat(younger);
console.log(allTogetherNow);
console.log(older);

//Nested array
//arrays can contain any types of value, including other arrays
let relatedThings = [
  ["Windows", "MacOS"],
  ["New York", "Chicago"],
];
console.log(relatedThings[0]);
console.log(relatedThings[1][0]);
console.log(relatedThings.length);

//Nested array: Looping
let rsvpGroups = [["Jane", "Mel"], "Jack", ["Rohan", "Debit", "Meg"]];
for (let i = 0; i < rsvpGroups.length; i++) {
  if (Array.isArray(rsvpGroups[i])) {
    for (let j = 0; j < rsvpGroups[i].length; j++) {
      let name = rsvpGroups[i][j];
      console.log(name);
    }
  } else {
    console.log(rsvpGroups[i]);
  }
}

let grid = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];
let firstColumn = [grid[0][0], grid[1][0], grid[2][0]];
console.log(firstColumn);
