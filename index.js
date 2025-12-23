//higher-order-function I
function happyFunction() {
  console.log("I am Happy");
}
let amazingArray = [happyFunction, happyFunction, happyFunction];

for (let i = 0; i < amazingArray.length; i++) {
  let element = amazingArray[i];
  element();
}
