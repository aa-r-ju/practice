//1️⃣ Array → squareNumbers
describe("Array.prototype.squareNumbers", () => {
  it("squares all numbers in the array", () => {
    const nums = [1, 2, 3, 4];
    expect(nums.squareNumbers()).toEqual([1, 4, 9, 16]);
  });

  it("does nothing for an empty array", () => {
    expect([].squareNumbers()).toEqual([]);
  });
});

//2️⃣ Array → onlyStrings
describe("Array.prototype.onlyStrings", () => {
  it("returns a new array with only string elements", () => {
    const arr = [1, "hi", true, "hello", 5];
    expect(arr.onlyStrings()).toEqual(["hi", "hello"]);
  });

  it("returns empty array if no strings", () => {
    expect([1, 2, 3].onlyStrings()).toEqual([]);
  });
});

//3️⃣ Class → Animal → Cat
describe("Animal", () => {
  let animal;
  beforeEach(() => {
    animal = new Animal(["Elephant", 10]);
  });

  it("sets name and age", () => {
    expect(animal.name).toBe("Elephant");
    expect(animal.age).toBe(10);
  });

  it("has getInfo method", () => {
    expect(animal.getInfo("name")).toBe("Elephant");
  });
});

describe("Cat", () => {
  let cat;
  beforeEach(() => {
    cat = new Cat(["Persian", true, [["Elephant", 10]]]);
  });

  it("extends Animal", () => {
    expect(cat instanceof Animal).toBe(true);
  });

  it("adds breed and isPet properties", () => {
    expect(cat.breed).toBe("Persian");
    expect(cat.isPet).toBe(true);
  });

  it("inherits Animal properties", () => {
    expect(cat.name).toBe("Elephant");
    expect(cat.age).toBe(10);
  });

  it("has meow method", () => {
    expect(cat.meow()).toBe("Meow!");
  });
});

//4️⃣ Class → Device → Laptop
describe("Device", () => {
  let device;
  beforeEach(() => {
    device = new Device(["Dell", "Windows"]);
  });

  it("sets brand and os", () => {
    expect(device.brand).toBe("Dell");
    expect(device.os).toBe("Windows");
  });
});

describe("Laptop", () => {
  let laptop;
  beforeEach(() => {
    laptop = new Laptop(["XPS 15", 16, [["Dell", "Windows"]]]);
  });

  it("extends Device", () => {
    expect(laptop instanceof Device).toBe(true);
  });

  it("adds model and ram properties", () => {
    expect(laptop.model).toBe("XPS 15");
    expect(laptop.ram).toBe(16);
  });

  it("inherits Device properties", () => {
    expect(laptop.brand).toBe("Dell");
    expect(laptop.os).toBe("Windows");
  });

  it("has start method", () => {
    expect(laptop.start()).toBe("Laptop starting...");
  });
});

//5️⃣ Array → reverseStrings

describe("Array.prototype.reverseStrings", () => {
  it("reverses each string in the array", () => {
    const arr = ["dog", "cat", "bird"];
    expect(arr.reverseStrings()).toEqual(["god", "tac", "drib"]);
  });

  it("does nothing for non-string elements", () => {
    const arr = ["dog", 123, true];
    expect(arr.reverseStrings()).toEqual(["god", 123, true]);
  });
});
