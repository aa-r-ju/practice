//delaring variable
let someName = "Hello There!";
let num = 23;

// declaring an Array
let arr = [2, someName, num, "Hello"];

//Accessing values in array
//by accessing value at index
let accessValue1 = arr[0];
let len = arr.length;
let accessValue2 = arr[1];
console.log(accessValue1);
console.log(len);
console.log(accessValue2);

//by looping through all indices
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i], "test");
}

//checking if variable is an array
let trueOrFalse = Array.isArray(arr);
console.log(trueOrFalse);

//Array Common - Method l
//push method
let pushMethod = arr.push("Smile:)");
console.log(arr);

//testing push method using loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i], "push");
}
let push = arr.length;
console.log(push);

//pop method
let popMethod = arr.pop();
console.log(popMethod, ".");

//testing pop method using loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i], "pop");
}
//shift method
let shift = arr.shift();
console.log(shift);

//testing shift using loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i], "tst");
}
let lenShift = arr.length;
console.log(lenShift);

//uhshift method
let unshiftMethod = arr.unshift("smiley:)");
console.log(unshiftMethod);

//testing unshift method using loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i], "unshift");
}
let lenUnshift = arr.length;
console.log(lenUnshift);

//Array Common - Method ll
//indexOf Method
let arr1 = ["Happy", "smiley", "star", "moon", "galaxy"];
console.log(arr1.indexOf("star"));
console.log(arr1.indexOf("Happy"));
console.log(arr1.indexOf("moon"));
console.log(arr1.indexOf("galaxy"));
console.log(arr1.indexOf("Reeta"));

//Includes Method
let includesMethod = arr1.includes("smiley");
console.log(includesMethod);
console.log(arr1.includes("Happy"));
console.log(arr1.includes("moon"));
console.log(arr1.includes("star"));
console.log(arr1.includes("galaxy"));
console.log(arr1.includes("Help"));

//Slice Method
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let slipt = numbers.slice(1, 5);
console.log(slipt);
console.log(numbers);

//Array Common Method lll
//Reverse Method

let nums = [2, 4, 6, 8, 10, 12, 14, 16];
let reverse = nums.reverse();
console.log(reverse);
console.log(nums, "123");

//Splice Method
let three = [3, 6, 9, 12, 15, 18, 21, 24];
let splice = three.splice(3, 2, "Hey There! : )");
console.log(splice);
console.log(three);

//Join Method

let coldDrinks = ["coca", "fanta", "sprite", "dew", "lemon soda", "appy"];
let join = coldDrinks.join("-");
let join1 = coldDrinks.join();
let join2 = coldDrinks.join("$");
console.log(join);
console.log(join1);
console.log(join2);
