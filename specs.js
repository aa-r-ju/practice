//🧠 1️⃣ Animal → Dog
describe("Animal", () => {
  let animal;

  beforeEach(() => {
    animal = new Animal(["Dog", 5]);
  });

  it("sets name and age", () => {
    expect(animal.name).toBe("Dog");
    expect(animal.age).toBe(5);
  });

  it("has getInfo method on prototype", () => {
    expect(animal.hasOwnProperty("getInfo")).toBe(false);
    expect(Animal.prototype.hasOwnProperty("getInfo")).toBe(true);
  });

  it("returns property value", () => {
    expect(animal.getInfo("name")).toBe("Dog");
    expect(animal.getInfo("age")).toBe(5);
  });
});

describe("Dog", () => {
  let dog;

  beforeEach(() => {
    dog = new Dog(["Bulldog", true, [["Dog", 5]]]);
  });

  it("extends Animal", () => {
    expect(dog instanceof Animal).toBe(true);
  });

  it("adds breed and isPet", () => {
    expect(dog.breed).toBe("Bulldog");
    expect(dog.isPet).toBe(true);
  });

  it("inherits Animal properties", () => {
    expect(dog.name).toBe("Dog");
    expect(dog.age).toBe(5);
  });

  it("has bark method", () => {
    expect(dog.bark()).toBe("Woof!");
  });
});

//🧠 2️⃣ Device → Phone
describe("Device", () => {
  let device;

  beforeEach(() => {
    device = new Device(["Apple", "iOS"]);
  });

  it("sets brand and os", () => {
    expect(device.brand).toBe("Apple");
    expect(device.os).toBe("iOS");
  });

  it("has getSpec method", () => {
    expect(device.getSpec("brand")).toBe("Apple");
  });
});

describe("Phone", () => {
  let phone;

  beforeEach(() => {
    phone = new Phone(["iPhone 15", 90, [["Apple", "iOS"]]]);
  });

  it("extends Device", () => {
    expect(phone instanceof Device).toBe(true);
  });

  it("adds model and battery", () => {
    expect(phone.model).toBe("iPhone 15");
    expect(phone.battery).toBe(90);
  });

  it("inherits Device properties", () => {
    expect(phone.brand).toBe("Apple");
  });

  it("has charge method", () => {
    expect(phone.charge()).toBe("Charging...");
  });
});

//🧠 3️⃣ Person → Student
describe("Person", () => {
  let person;

  beforeEach(() => {
    person = new Person(["John", 25]);
  });

  it("sets name and age", () => {
    expect(person.name).toBe("John");
    expect(person.age).toBe(25);
  });

  it("has getDetail method", () => {
    expect(person.getDetail("name")).toBe("John");
  });
});

describe("Student", () => {
  let student;

  beforeEach(() => {
    student = new Student(["Computer Science", 3.8, [["John", 25]]]);
  });

  it("extends Person", () => {
    expect(student instanceof Person).toBe(true);
  });

  it("adds major and gpa", () => {
    expect(student.major).toBe("Computer Science");
    expect(student.gpa).toBe(3.8);
  });

  it("inherits Person properties", () => {
    expect(student.name).toBe("John");
  });

  it("has study method", () => {
    expect(student.study()).toBe("Studying...");
  });
});

//🧠 4️⃣ Shape → Rectangle
describe("Shape", () => {
  let shape;

  beforeEach(() => {
    shape = new Shape(["rectangle"]);
  });

  it("sets type", () => {
    expect(shape.type).toBe("rectangle");
  });

  it("has getType method", () => {
    expect(shape.getType()).toBe("rectangle");
  });
});

describe("Rectangle", () => {
  let rect;

  beforeEach(() => {
    rect = new Rectangle([10, 5, [["rectangle"]]]);
  });

  it("extends Shape", () => {
    expect(rect instanceof Shape).toBe(true);
  });

  it("sets width and height", () => {
    expect(rect.width).toBe(10);
    expect(rect.height).toBe(5);
  });

  it("calculates area", () => {
    expect(rect.area()).toBe(50);
  });
});

//🧠 5️⃣ Employee → Manager
describe("Employee", () => {
  let emp;

  beforeEach(() => {
    emp = new Employee(["Alice", 50000]);
  });

  it("sets name and salary", () => {
    expect(emp.name).toBe("Alice");
    expect(emp.salary).toBe(50000);
  });

  it("has getInfo method", () => {
    expect(emp.getInfo("name")).toBe("Alice");
  });
});

describe("Manager", () => {
  let manager;

  beforeEach(() => {
    manager = new Manager(["HR", 5, [["Alice", 50000]]]);
  });

  it("extends Employee", () => {
    expect(manager instanceof Employee).toBe(true);
  });

  it("adds department and teamSize", () => {
    expect(manager.department).toBe("HR");
    expect(manager.teamSize).toBe(5);
  });

  it("inherits Employee properties", () => {
    expect(manager.name).toBe("Alice");
  });

  it("has manage method", () => {
    expect(manager.manage()).toBe("Managing team...");
  });
});
