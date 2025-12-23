//higher-order-function I
function callsACallback(callback) {
  callback();
}
function happyFunction() {
  console.log(" I am happy");
}

function greatFunction() {
  console.log("I am Great");
}
callsACallback(happyFunction);
callsACallback(greatFunction);
