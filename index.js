//higher-order-function I
function logsAType(value) {
  console.log(typeof value);
}

function happyFunction() {
  console.log("I am happy");
}

logsAType(happyFunction);
