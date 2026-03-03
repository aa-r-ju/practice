function chainLookup(arr1, arr2) {
  return arr1.map((val) => {
    for (let obj of arr2) {
      if (val in obj) {
        return obj[val];
      }
    }
  });
}

console.log(chainLookup(["a", "b", "c"], [{ a: 1 }, { b: 2 }, { c: 3 }]));
console.log(chainLookup(["x"], [{ x: 10 }, { x: 20 }]));
