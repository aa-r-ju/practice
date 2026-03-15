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

function makeRangeIterator(start, end) {
  let current = start;

  return {
    getNext() {
      if (current <= end) {
        let value = current;
        current++;
        return { value: value, done: false };
      }

      return { value: undefined, done: true };
    },
  };
}
