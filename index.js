function callTwice(fun) {
  let first = fun();
  let second = fun();
  return second;
}

function once(fn) {
  let called = false;
  let savedValue;

  return function () {
    if (called === false) {
      savedValue = fn();
      called = true;
    }

    return savedValue;
  };
}

let count = 0;
