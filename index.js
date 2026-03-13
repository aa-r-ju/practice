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
