function throttle(fn, delay) {
  let isThrottled = false;
  let lastResult;

  return function (...args) {
    if (isThrottled) {
      return lastResult;
    }

    lastResult = fn.apply(this, args);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
    }, delay);

    return lastResult;
  };
}
