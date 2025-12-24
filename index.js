//higher-order-function II
function getGreeter(name1) {
  return function (name2) {
    console.log("Hi", name1 + " meet " + name2);
  };
}

let introduceMarieTo = getGreeter("Marie");
let introduceRosalindTo = getGreeter("Rosalind");
introduceMarieTo("Dorothy");
introduceMarieTo("Albert");

introduceRosalindTo("Barbara");
introduceRosalindTo("Isaac");
