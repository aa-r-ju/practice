/* eslint-env jasmine */
/* eslint-disable no-undef */

// Note: The ES2015 Class Keyword should be used.

describe("Vehicle class", () => {
  let myVehicle;

  beforeEach(() => {
    myVehicle = new Vehicle(120, "diesel");
  });

  it("is a Constructor Function", () => {
    expect(typeof Vehicle).toBe("function");
  });

  it("should take speed and fuelType as parameters", () => {
    expect(myVehicle.speed).toBe(120);
    expect(myVehicle.fuelType).toBe("diesel");
  });

  it("should have a getDetails function on its prototype", () => {
    expect(myVehicle.getDetails()).toBe("Speed: 120, Fuel: diesel");
    expect(myVehicle.hasOwnProperty("getDetails")).toEqual(false);
  });
});

describe("Car class extends from Vehicle", () => {
  let myCar;

  beforeEach(() => {
    myCar = new Car(180, "petrol", 4);
  });

  it("is a Constructor Function", () => {
    expect(typeof Car).toBe("function");
  });

  it("should have speed, fuelType, and doors", () => {
    expect(myCar.speed).toBe(180);
    expect(myCar.fuelType).toBe("petrol");
    expect(myCar.doors).toBe(4);
  });

  it("extends the Vehicle Class", () => {
    expect(myCar instanceof Vehicle).toBe(true);
    expect(myCar instanceof Car).toBe(true);
  });

  it("has access to the getDetails function from Vehicle", () => {
    expect(myCar.getDetails()).toBe("Speed: 180, Fuel: petrol");
  });
});
