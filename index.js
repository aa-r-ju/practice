// //basic Scope
// let wow = "wow";
// console.log("i can access wow because it is in scope:", wow);

// let global = "ear";
// console.log("outer", global);

// function funFunction() {
//   console.log("inner", global);
// }
// funFunction();

// // console.log(waitForIt);
// let waitForIt = "Here i am";
// console.log(waitForIt);

// function happyFunction() {
//   let message = "I am so happy";
//   console.log(message);
// }
// happyFunction();
// // console.log(message);

// let message = "think globally";
// function logAMessage() {
//   let message = "Act locally";
//   console.log(message);
// }
// logAMessage();

// function logAMessage1() {
//   let msg = "Act locally";
//   console.log(message);
// }
// logAMessage1();

// function logAMessage2(message) {
//   console.log(message);
// }
// logAMessage2("act locally");

// let globalVar = "global";
// function outer() {
//   let outerVar = "outer";
//   function inner() {
//     let innerVar = "inner";
//     console.log(globalVar, outerVar, innerVar);
//   }
//   inner();
// }

// outer();

// let collision = "Global";
// function outer1(collision) {
//   function inner1() {
//     let collision = "inner";
//     console.log(collision);
//   }
//   inner1();
// }
// outer1("outer");

// function outer2(collision) {
//   function inner2() {
//     console.log(collision);
//   }
//   inner2();
// }
// outer2("outer");

// function outer3() {
//   function inner3() {
//     console.log(collision);
//   }
//   inner3();
// }
// outer3("outer");

function outer() {
  let outerVar = "outer";
  function inner(outerVar) {
    let innerVar = "inner";
    console.log(outerVar, innerVar);
  }
  inner();
}
outer();

let alwaysTrue = true;
function dontMindMe() {
  // alwaysTrue = false;
  let alwaysTrue = false;
}
dontMindMe();
if (alwaysTrue) {
  console.log("All is well");
} else {
  throw new Error("everything is broken");
}
