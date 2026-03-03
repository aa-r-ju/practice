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
console.log(objectMergeMap([1, 2, 3], [{ 1: "a" }, { 2: "b" }, { 3: "c" }]));
