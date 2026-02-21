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
