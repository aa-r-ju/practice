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

function x() {
  var a = 100;

  return {
    get: function () {
      console.log(a);
    },
    set: function (num) {
      a = num;
    },
  };
}

const obj = x();
console.log(obj.get());
console.log(obj.set(500));
console.log(obj.get());

// for (var i = 0; i <= 5; i++) {
//   function close(x) {
//     setTimeout(function () {
//       console.log(x);
//     }, i * 1000)
//   }
//   close(i)
// }

// for (var i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// for (var i = 1; i <= 3; i++) {
//   console.log("inside:", i);
// }

// console.log("outside:", i);

// for (var i = 0; i <= 5; i++) {
//   function close(x) {
//     setTimeout(function () {
//       console.log(x);
//     }, 1000); // no delay
//   }
//   close(i);
// }

function outer(b) {
  function inner() {
    console.log(a, b);
  }
  // let a = 10;
  return inner;
}
// let a = 100;

let copunt = outer("helloworld");
copunt();
let a = 120;
