class Bird {
  constructor(name) {
    this.name = name;
    this.chicks = [];
  }

  fly() {
    return "I am flying";
  }

  introduce() {
    return `Hi, I'm ${this.name} the Bird`;
  }

  layEgg() {
    const child = new Bird(`Baby ${this.name}`);
    this.chicks.push(child);
    return child;
  }
}

class Eagle extends Bird {
  constructor(name, wingspan) {
    super(name);
    this.wingspan = wingspan;
  }

  hunt() {
    return "Hunting prey!";
  }
  introduce() {
    return `Hi, I'm ${this.name} the Eagle`;
  }
  layEgg(wingspan) {
    const babyEagle = new Eagle(`Baby ${this.name}`, wingspan);
    this.chicks.push(babyEagle);
    return babyEagle;
  }
}

class Parrot extends Bird {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
  speak() {
    return "Squawk!";
  }
  layEgg(color) {
    const babyParrot = new Parrot(`Baby ${this.name}`, color);
    this.chicks.push(babyParrot);
    return babyParrot;
  }
}
