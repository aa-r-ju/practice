class Vehicle {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
    this.speeds = [];
  }

  getBrand() {
    return this.brand;
  }

  getYear() {
    return this.year;
  }

  addSpeed(val) {
    if (val < 1 || val > 300) {
      return `${val} is not a valid speed`;
    } else {
      this.speeds.push(val);
    }
  }

  getAverageSpeed() {
    if (this.speeds.length === 0) {
      return `There is no speeds`;
    }
    let sum = this.speeds.reduce((acc, char) => {
      acc += char;
      return acc;
    }, 0);
    return sum / this.speeds.length;
  }
}

class Car extends Vehicle {
  constructor(brand, year, model, fuelType) {
    super(brand, year);
    this.model = model;
    this.fuelType = fuelType;
  }
}

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
    this.bonuses = [];
  }
  addBonus(val) {
    this.bonuses.push(val);
  }
  getTotalBonus() {
    let sum =
      this.bonuses.reduce((acc, char) => {
        acc += char;
        return acc;
      }, 0) || 0;
    return sum;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }
}

class Course {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
    this.students = [];
  }

  addStudent(name) {
    this.students.push(name);
  }

  getStudentCount() {
    return this.students.length;
  }
}

class OnlineCourse extends Course {
  constructor(name, duration, platform) {
    super(name, duration);
    this.platform = platform;
  }
}

let kkk = new OnlineCourse("React", 30, "Zoom");
console.log(kkk.addStudent("Aarju"));
console.log(kkk.addStudent("Ram"));
console.log(kkk.addStudent("Shyam"));
console.log(kkk.getStudentCount());
console.log(kkk);
