function once(fn) {
  let value = false;
  let result;
  return function () {
    if (!value) {
      value = true;
      result = fn();
    }
    return result;
  };
}

function thrice(fn) {
  let count = 0;
  return function () {
    if (count < 3) {
      count++;
      return fn();
    }
    return 0;
  };
}

function limit(fn, times) {
  let count = 0;
  return function () {
    if (count < times) {
      count++;
      return fn();
    }
    return 0;
  };
}

function everyOther(fn) {
  let count = 0;
  return function () {
    count++;
    if (count % 2 === 0) {
      return fn();
    }
  };
}

function after(times, fn) {
  let count = 0;
  return function () {
    count++;
    if (count >= times) {
      return fn();
    }
  };
}

function before(times, fn) {
  let count = 0;
  return function () {
    if (count < times) {
      count++;
      return fn();
    }
  };
}

let kkk = before(2, () => 88);
console.log(kkk());
console.log(kkk());
console.log(kkk());
