function limitedCounter(val) {
  let count = 0;
  return {
    increment: function () {
      if (count < val) {
        count++;
      }
    },
    getCount: function () {
      return count;
    },
  };
}

function toggleMaker(value) {
  let result = value;
  return {
    toggle: function () {
      result = !result;
    },
    getState: function () {
      return result;
    },
  };
}
let toggle = toggleMaker(false);
console.log(toggle.toggle());
console.log(toggle.getState());
console.log(toggle.toggle());
console.log(toggle.getState());
