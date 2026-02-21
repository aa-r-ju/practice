/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("Bird class", () => {
  let myBird;

  beforeEach(() => {
    myBird = new Bird("Sky");
  });

  it("should be an instance of Bird", () => {
    expect(myBird instanceof Bird).toBe(true);
  });

  it("should take name as a parameter", () => {
    expect(myBird.name).toBe("Sky");
  });

  it("should have an array called chicks", () => {
    expect(myBird.chicks).toEqual([]);
  });

  it("should have a fly method on its prototype", () => {
    expect(myBird.hasOwnProperty("fly")).toBe(false);
    expect(myBird.fly()).toBe("I am flying");
  });

  it("should have a introduce method that uses dynamic class name", () => {
    expect(myBird.introduce()).toBe("Hi, I'm Sky the Bird");
  });

  it("should have a layEgg method", () => {
    const baby = myBird.layEgg();
    expect(baby.name).toBe("Baby Sky");
    expect(baby.chicks).toEqual([]);
    expect(myBird.chicks).toEqual([baby]);
  });
});

describe("Eagle class", () => {
  let eagle;

  beforeEach(() => {
    eagle = new Eagle("Hunter", 200);
  });

  it("should extend Bird", () => {
    expect(eagle instanceof Eagle).toBe(true);
    expect(eagle instanceof Bird).toBe(true);
  });

  it("should have name and chicks from Bird", () => {
    expect(eagle.name).toBe("Hunter");
    expect(eagle.chicks).toEqual([]);
  });

  it("should have a wingspan property", () => {
    expect(eagle.wingspan).toBe(200);
  });

  it("should have a hunt method on prototype", () => {
    expect(eagle.hunt()).toBe("Hunting prey!");
  });

  it("should override introduce method", () => {
    expect(eagle.introduce()).toBe("Hi, I'm Hunter the Eagle");
  });

  it("should have its own layEgg method that takes wingspan", () => {
    const babyEagle = eagle.layEgg(150);
    expect(eagle.chicks).toEqual([babyEagle]);
    expect(babyEagle.name).toBe("Baby Hunter");
    expect(babyEagle.wingspan).toBe(150);
  });
});

describe("Parrot class", () => {
  let parrot;

  beforeEach(() => {
    parrot = new Parrot("Polly", "red");
  });

  it("should extend Bird", () => {
    expect(parrot instanceof Parrot).toBe(true);
    expect(parrot instanceof Bird).toBe(true);
    expect(parrot instanceof Eagle).toBe(false);
  });

  it("should have a color property", () => {
    expect(parrot.color).toBe("red");
  });

  it("should have a speak method", () => {
    expect(parrot.speak()).toBe("Squawk!");
  });

  it("should inherit fly method from Bird", () => {
    expect(parrot.fly()).toBe("I am flying");
  });

  it("should override layEgg method to accept color", () => {
    const babyParrot = parrot.layEgg("green");
    expect(parrot.chicks).toEqual([babyParrot]);
    expect(babyParrot.name).toBe("Baby Polly");
    expect(babyParrot.color).toBe("green");
  });
});
