function toggler(...args) {
  let index = 0;

  return function () {
    let value = args[index % args.length];
    index++;
    return value;
  };
}
