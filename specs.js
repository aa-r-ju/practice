//🔥 1. once (VERY IMPORTANT)
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("once", () => {
  it("returns a function", () => {
    const fn = once(() => 5);
    expect(typeof fn).toBe("function");
  });

  it("runs the function only once", () => {
    let count = 0;

    const increment = once(() => {
      count++;
      return count;
    });

    expect(increment()).toBe(1);
    expect(increment()).toBe(1);
    expect(increment()).toBe(1);
  });
});

//🔥 2. thrice
describe("thrice", () => {
  it("calls function at most 3 times", () => {
    const spy = jasmine.createSpy("spy", () => 5);
    const fn = thrice(spy);

    fn();
    fn();
    fn();
    fn();

    expect(spy.calls.count()).toBe(3);
  });

  it("returns 0 after 3 calls", () => {
    const fn = thrice(() => 10);

    fn();
    fn();
    fn();
    expect(fn()).toBe(0);
  });
});

//🔥 3. limit (INTERVIEW FAVORITE 😈)
describe("limit", () => {
  it("limits function calls to n times", () => {
    const spy = jasmine.createSpy("spy", () => 10);
    const fn = limit(spy, 2);

    fn();
    fn();
    fn();

    expect(spy.calls.count()).toBe(2);
  });

  it("returns 0 after limit is reached", () => {
    const fn = limit(() => 5, 1);

    fn();
    expect(fn()).toBe(0);
  });
});

//🔥 4. everyOther (like alternate but reversed)
describe("everyOther", () => {
  let count;

  beforeEach(() => {
    count = 0;
  });

  it("runs function every second call", () => {
    const fn = everyOther(() => {
      count++;
    });

    fn(); // skip
    fn(); // run
    fn(); // skip
    fn(); // run

    expect(count).toBe(2);
  });
});

//🔥 5. after (VERY COMMON)
describe("after", () => {
  it("only runs function after n calls", () => {
    let count = 0;

    const fn = after(3, () => {
      count++;
    });

    fn();
    fn();
    fn(); // starts here
    fn();
    fn();

    expect(count).toBe(3);
  });
});

//🔥 6. before (opposite of after)
describe("before", () => {
  it("runs function only n times", () => {
    let count = 0;

    const fn = before(2, () => {
      count++;
    });

    fn();
    fn();
    fn();
    fn();

    expect(count).toBe(2);
  });
});
