function chainLookup(arr1, arr2) {
  return arr1.map((val) => {
    for (let obj of arr2) {
      if (val in obj) {
        return obj[val];
      }
    }
  });
}

function doubleLookup(arr1, arr2, arr3) {
  return arr1.map((val) => {
    const first = arr2[val];
    return arr3[first];
  });
}

function objectMergeMap(arr1, arr2) {
  const merged = arr2.reduce((acc, obj) => {
    return { ...acc, ...obj };
  }, {});

  return arr1.map((val) => merged[val]);
}

function conditionalMap(arr, obj) {
  return arr.filter((key) => key in obj).map((key) => obj[key]);
}

function nestedLookup(keys, objects) {
  return keys.map((key) => {
    const obj = objects.find((o) => key in o);

    return obj[key].value;
  });
}

console.log(
  nestedLookup(["a", "b"], [{ a: { value: 1 } }, { b: { value: 2 } }]),
);
