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

console.log(doubleLookup(["a", "b"], { a: 1, b: 2 }, { 1: "one", 2: "two" }));
