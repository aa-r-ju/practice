class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(name, price) {
    this.items.push({ name, price });
  }

  getTotal() {
    return this.items.reduce((acc, char) => {
      acc += char.price;
      return acc;
    }, 0);
  }

  removeItem(name) {
    this.items = this.items.filter((element) => element.name !== name);
  }
}

let kk = new ShoppingCart();
console.log(kk.addItem("Laptop", 1000), "lll");
console.log(kk.addItem("Mouse", 50));
console.log(kk.getTotal());
console.log(kk.removeItem("Mouse"));
console.log(kk);
