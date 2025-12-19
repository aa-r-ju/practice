let countries = ["Argentina", "Bolivia", "Brazil", "Chile"];
console.log(countries.indexOf("Brazil"));
console.log(countries.indexOf("Nepal"));

let graceHopper = {
  first: "Grace",
  last: "Hopper",
  rank: "Rear Admiral",
  myMethod: function () {
    console.log("I am from a Method");
  },
  sayQuote: function () {
    console.log("It's easier to ask fogiveness than it is to get permission.");
  },
  getAge: function (year) {
    return year - 1906;
  },
  greet: function (name) {
    console.log("Hi", name, "I am Rear Admiral Hopper");
  },
  greet1: function (name) {
    console.log("Hi", name, "I am ", graceHopper.rank, graceHopper.last);
  },
  tellName: function (name) {
    console.log("Hey my name is", this.first);
  },
};
graceHopper.myMethod();
graceHopper.sayQuote();
console.log(graceHopper.getAge(2025));
graceHopper.greet("Karen");
graceHopper.greet1("Gabe");
graceHopper.tellName();

// let graceHopper = {
//   first: "Grace",
//   last: "Hopper",
//   rank: "Rear Admiral",
//   getThis: function () {
//     return this;
//   },
// };

// let returnedObj = graceHopper.getThis();
// console.log(returnedObj.first);
// console.log(returnedObj === graceHopper);

let calc = {
  num1: 20,
  num2: 30,
  sum: function () {
    return this.num1 + this.num2;
  },
  difference: function () {
    return this.num1 - this.num2;
  },
};
console.log(calc.sum());
calc.num2 = 15;
console.log(calc.difference());
