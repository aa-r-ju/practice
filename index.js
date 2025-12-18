// Object
let myArray = ["Value1", "Value2"];
let myObj = {
  key1: "Value1",
  key2: "Value2",
};
console.log(myArray[0]);
console.log(myObj["key1"]);

let pusheen = {
  name: "Pusheen",
  age: 7,
  color: "Gray and Tabby",
};
console.log(typeof pusheen);

console.log(pusheen["name"]);
console.log(pusheen["age"]);
console.log(pusheen["color"]);
console.log(pusheen["notAKeyInTheObject"]);

let keyToCheck = "name";
console.log(pusheen[keyToCheck]);
console.log(pusheen["col" + "or"]);
console.log(pusheen[1]);

// accessing value using dot notation
console.log(pusheen.name);
console.log(pusheen.age);
console.log(pusheen.color);
console.log(pusheen.keyToCheck);

//Adding a key value pair
pusheen["sister"] = "Stormy";
pusheen.brother = "Pip";
console.log(pusheen);

//changing a value
pusheen["age"] = 8;
pusheen.age++;
console.log(pusheen["age"]);

//deleting a key value pair
delete pusheen["age"];
delete pusheen.color;
console.log(pusheen);

//in operator
console.log("name" in pusheen);
console.log("sadness" in pusheen);

//for in loop
for (let key in pusheen) {
  console.log(key);
  console.log("Pusheen's", key, "is", pusheen[key]);
  console.log("Pusheen's", key, "is", pusheen.key);
}

//object.keys()
console.log(Object.keys(pusheen));

//Nested Arrays
let aarju = {
  name: "Aarju",
  age: 25,
  color: ["pale", "fair"],
  siblings: {
    brother: "Arbin",
    sister: "Aarushi",
  },
};
console.log(aarju["color"][0]);
console.log(aarju["color"][1]);

//Nested Objects
console.log(aarju.siblings.brother);
console.log(aarju.siblings.sister);
