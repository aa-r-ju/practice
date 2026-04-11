//🧪 8. someRecursive (opposite of every)
function someRecursive(arr, fn) {
  if (arr.length === 0) {
    return false;
  }

  let first = arr[0];
  let rest = arr.slice(1);

  if (Array.isArray(first)) {
    return someRecursive(first, fn) || someRecursive(rest, fn);
  }

  if (fn(first)) {
    return true;
  }

  return someRecursive(rest, fn);
}

//🧪 9. filterRecursive
function filterRecursiv(arr, fn) {
  if (arr.length === 0) {
    return [];
  }

  let first = arr[0];
  let rest = arr.slice(1);

  if (Array.isArray(first)) {
    return filterRecursiv(first, fn).concat(filterRecursiv(rest, fn));
  }
  if (fn(first)) {
    return [first].concat(filterRecursiv(rest, fn));
  }
  return filterRecursiv(rest, fn);
}

//🧪 10. flattenDepth (LIMITED flatten)
function flattenDepth(arr, depth) {
  if (depth === 0) return arr;

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (Array.isArray(value)) {
      result = result.concat(flattenDepth(value, depth - 1));
    } else {
      result.push(value);
    }
  }

  return result;
}

//🧪 11. findInNested

function findInNested(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (Array.isArray(value)) {
      let result = findInNested(value, callback);

      if (result !== undefined) {
        return result;
      }
    } else {
      if (callback(value)) {
        return value;
      }
    }
  }

  return undefined;
}

// 🧪 12. sumOnlyEven
function sumOnlyEven(arr) {
  if (arr.length === 0) return 0;

  let first = arr[0];
  let rest = arr.slice(1);

  if (Array.isArray(first)) {
    return sumOnlyEven(first) + sumOnlyEven(rest);
  } else if (first % 2 === 0) {
    return first + sumOnlyEven(rest);
  } else {
    return sumOnlyEven(rest);
  }
}

//🧪 13. countTypes (🔥 INTERVIEW LEVEL)
function countTypes(arr) {
  if (arr.length === 0) {
    return { number: 0, string: 0, boolean: 0 };
  }

  let first = arr[0];
  let rest = arr.slice(1);

  let result = { number: 0, string: 0, boolean: 0 };

  if (Array.isArray(first)) {
    let nested = countTypes(first);
    let restResult = countTypes(rest);

    return {
      number: nested.number + restResult.number,
      string: nested.string + restResult.string,
      boolean: nested.boolean + restResult.boolean,
    };
  }

  if (typeof first === "number") result.number++;
  if (typeof first === "string") result.string++;
  if (typeof first === "boolean") result.boolean++;

  let restResult = countTypes(rest);

  return {
    number: result.number + restResult.number,
    string: result.string + restResult.string,
    boolean: result.boolean + restResult.boolean,
  };
}
console.log(countTypes([1, ["a", true], [2]]));
console.log(countTypes([1, "a", true, "pp"]));
console.log(countTypes([1, ["a", true], [2]]));
console.log(countTypes([1, [2, [3, [4]]]]));
