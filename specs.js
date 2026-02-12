//one
describe("limitedCounter", () => {
  let counter;

  beforeEach(() => {
    counter = limitedCounter(3);
  });

  it("returns an object with increment and getCount methods", () => {
    expect(typeof counter.increment).toBe("function");
    expect(typeof counter.getCount).toBe("function");
    expect(Object.keys(counter).length).toBe(2);
  });

  it("increments count until limit is reached", () => {
    counter.increment();
    counter.increment();
    counter.increment();
    counter.increment(); // should NOT increase past limit

    expect(counter.getCount()).toBe(3);
  });

  it("different counters have separate states", () => {
    const counter2 = limitedCounter(5);

    counter.increment();
    counter2.increment();
    counter2.increment();

    expect(counter.getCount()).toBe(1);
    expect(counter2.getCount()).toBe(2);
  });
});

// two
describe("toggleMaker", () => {
  let toggle;

  beforeEach(() => {
    toggle = toggleMaker(true);
  });

  it("returns an object with toggle and getState methods", () => {
    expect(typeof toggle.toggle).toBe("function");
    expect(typeof toggle.getState).toBe("function");
    expect(Object.keys(toggle).length).toBe(2);
  });

  it("toggle switches between true and false", () => {
    expect(toggle.getState()).toBe(true);

    toggle.toggle();
    expect(toggle.getState()).toBe(false);

    toggle.toggle();
    expect(toggle.getState()).toBe(true);
  });

  it("each toggle instance has its own state", () => {
    const toggle2 = toggleMaker(false);

    toggle.toggle(); // false
    toggle2.toggle(); // true

    expect(toggle.getState()).toBe(false);
    expect(toggle2.getState()).toBe(true);
  });
});

//three
describe("callLimiter", () => {
  it("allows a function to be called only N times", () => {
    let num = 0;

    const add = () => {
      num += 1;
      return num;
    };

    const limited = callLimiter(add, 2);

    expect(limited()).toBe(1);
    expect(limited()).toBe(2);
    expect(limited()).toBe("limit reached");
    expect(limited()).toBe("limit reached");
  });

  it("different limited functions track separately", () => {
    let numA = 0;
    let numB = 0;

    const limitedA = callLimiter(() => ++numA, 1);
    const limitedB = callLimiter(() => ++numB, 3);

    limitedA();
    limitedA();

    limitedB();
    limitedB();

    expect(numA).toBe(1);
    expect(numB).toBe(2);
  });
});
