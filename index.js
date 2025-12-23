//higher-order-function I
let bridges = ["Brooklyn", "Golden Gate", "London"];
function logUpperCase(string, idx) {
  console.log(string, "is at index", idx);
}
bridges.forEach(logUpperCase);
