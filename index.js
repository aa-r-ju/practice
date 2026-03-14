function makeCounter() {
  let value = 0;
  return {
    increment() {
      value++;
      return value;
    },
    decrement() {
      value--;
      return value;
    },
    getValue() {
      return value;
    },
  };
}

function makeStack() {
  let arr = [];
  return {
    push(num) {
      arr.push(num);
    },
    pop(num) {
      return arr.pop();
    },
    size() {
      return arr.length;
    },
  };
}

let stack = makeStack();
console.log(stack.push(9));
console.log(stack.push(11));
console.log(stack.pop());
console.log(stack.size());
