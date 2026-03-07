// 1️⃣ Practice Spec — Vehicle → Car
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("Vehicle", () => {
  let vehicle;

  beforeEach(() => {
    vehicle = new Vehicle("Toyota", 2020);
  });

  it("Vehicle is a class", () => {
    expect(vehicle instanceof Vehicle).toBe(true);
  });

  it("has properties brand, year, and speeds", () => {
    expect(vehicle.brand).toBe("Toyota");
    expect(vehicle.year).toBe(2020);
    expect(vehicle.speeds).toEqual([]);

    expect(Object.keys(vehicle).sort()).toEqual(
      ["brand", "year", "speeds"].sort(),
    );
  });

  it("has methods getBrand, getYear, addSpeed, getAverageSpeed", () => {
    expect(vehicle.getBrand).toEqual(Vehicle.prototype.getBrand);
    expect(vehicle.getYear).toEqual(Vehicle.prototype.getYear);
    expect(vehicle.addSpeed).toEqual(Vehicle.prototype.addSpeed);
    expect(vehicle.getAverageSpeed).toEqual(Vehicle.prototype.getAverageSpeed);
  });

  it("addSpeed adds speeds to array", () => {
    vehicle.addSpeed(60);
    vehicle.addSpeed(80);
    vehicle.addSpeed(100);

    expect(vehicle.speeds).toEqual([60, 80, 100]);
  });

  it("speed must be between 1-300", () => {
    expect(vehicle.addSpeed(400)).toBe("400 is not a valid speed");
  });

  it("getAverageSpeed returns average speed", () => {
    vehicle.addSpeed(60);
    vehicle.addSpeed(80);
    vehicle.addSpeed(100);

    expect(vehicle.getAverageSpeed()).toBe(80);
  });
});

describe("Car", () => {
  let car;

  beforeEach(() => {
    car = new Car("Tesla", 2022, "Model S", "Electric");
  });

  it("extends Vehicle", () => {
    expect(car instanceof Vehicle).toBe(true);
  });

  it("has model and fuelType properties", () => {
    expect(car.model).toBe("Model S");
    expect(car.fuelType).toBe("Electric");
  });
});

//2️⃣ Practice Spec — Employee → Manager
describe("Employee", () => {
  let emp;

  beforeEach(() => {
    emp = new Employee("John", 5000);
  });

  it("Employee is a class", () => {
    expect(emp instanceof Employee).toBe(true);
  });

  it("has properties name, salary, bonuses", () => {
    expect(emp.name).toBe("John");
    expect(emp.salary).toBe(5000);
    expect(emp.bonuses).toEqual([]);
  });

  it("addBonus adds bonuses", () => {
    emp.addBonus(500);
    emp.addBonus(300);

    expect(emp.bonuses).toEqual([500, 300]);
  });

  it("getTotalBonus returns total bonuses", () => {
    emp.addBonus(500);
    emp.addBonus(300);

    expect(emp.getTotalBonus()).toBe(800);
  });
});

describe("Manager", () => {
  let manager;

  beforeEach(() => {
    manager = new Manager("Alice", 9000, "HR");
  });

  it("extends Employee", () => {
    expect(manager instanceof Employee).toBe(true);
  });

  it("has department property", () => {
    expect(manager.department).toBe("HR");
  });
});

//3️⃣ Practice Spec — Course → OnlineCourse
describe("Course", () => {
  let course;

  beforeEach(() => {
    course = new Course("JavaScript", 50);
  });

  it("has properties name, duration, students", () => {
    expect(course.name).toBe("JavaScript");
    expect(course.duration).toBe(50);
    expect(course.students).toEqual([]);
  });

  it("addStudent adds student names", () => {
    course.addStudent("Aarju");
    course.addStudent("Ram");

    expect(course.students).toEqual(["Aarju", "Ram"]);
  });

  it("getStudentCount returns number of students", () => {
    course.addStudent("Aarju");
    course.addStudent("Ram");

    expect(course.getStudentCount()).toBe(2);
  });
});

describe("OnlineCourse", () => {
  let online;

  beforeEach(() => {
    online = new OnlineCourse("React", 30, "Zoom");
  });

  it("extends Course", () => {
    expect(online instanceof Course).toBe(true);
  });

  it("has platform property", () => {
    expect(online.platform).toBe("Zoom");
  });
});
