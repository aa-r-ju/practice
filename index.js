//higher-order-function I
function sayToAll(names, sayWithNameFunc) {
  for (let i = 0; i < names.length; i++) {
    sayWithNameFunc(names[i]);
  }
}
let group = ["jane", "Jill", "Pip", "Mike"];

sayToAll(group, function (name) {
  console.log("Bye, ", name + "!");
});
