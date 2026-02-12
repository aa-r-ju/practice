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
let counter = limitedCounter(2);
console.log(counter.increment());
