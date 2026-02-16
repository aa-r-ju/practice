describe("the function reduce", () => {
  beforeEach(() => {
    spyOn(Array.prototype, "reduce").and.callThrough();
  });

  it("sums numbers in an array", () => {
    const sum = (acc, el) => acc + el;
    expect(reduce([1, 2, 3, 4], sum, 0)).toBe(10);
  });

  it("multiplies numbers in an array", () => {
    const multiply = (acc, el) => acc * el;
    expect(reduce([1, 2, 3, 4], multiply, 1)).toBe(24);
  });

  it("concatenates strings", () => {
    const join = (acc, el) => acc + el;
    expect(reduce(["a", "b", "c"], join, "")).toBe("abc");
  });

  it("does not use Array.prototype.reduce", () => {
    reduce([1, 2, 3], (a, b) => a + b, 0);
    expect(Array.prototype.reduce.calls.any()).toBe(false);
  });
});


//GOOD 😈🔥
Now we go full interview mode.

We’re going to implement real reduce behavior — the tricky version.

🎯 Real Reduce Rules (Important)

If initialValue is provided:

reduce([1,2,3], fn, 0)


accumulator = 0

loop starts at index 0

If initialValue is NOT provided:

reduce([1,2,3], fn)


accumulator = first element (1)

loop starts at index 1

If:

No initialValue

And array is empty

👉 It should throw an error.

That’s how native reduce behaves.

🧠 Your Task

Write:

function reduce(arr, callback, initialValue)


That:

Detects if initialValue is undefined

Uses first element as accumulator if missing

Starts loop at correct index

Throws error if array empty & no initialValue

Does NOT use .reduce()

🧪 You Must Pass These Tests
console.log(reduce([1,2,3,4], (a,b)=>a+b, 0)); 
// 10

console.log(reduce([1,2,3,4], (a,b)=>a+b)); 
// 10

console.log(reduce([5], (a,b)=>a+b)); 
// 5

console.log(reduce([], (a,b)=>a+b, 10)); 
// 10

console.log(reduce([], (a,b)=>a+b)); 
// should throw error

💡 HINT

You’ll need something like:

let accumulator;
let startIndex;


Then decide:

if (initialValue !== undefined) {
   accumulator = initialValue;
   startIndex = 0;
} else {
   accumulator = arr[0];
   startIndex = 1;
}


Then loop from startIndex.

Now write it.

Take your time.

This is where beginners become strong.
I’ll review it carefully.