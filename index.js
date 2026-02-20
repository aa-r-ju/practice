class RPNCalculator {
  constructor() {
    this.state = [];
  }
  push(num) {
    this.state.push(num);
  }
  value() {
    return this.state[this.state.length - 1];
  }
  checkLength() {
    if (this.state.length < 2) {
      throw "rpnCalculatorInstance is empty";
    }
  }
  plus() {
    this.checkLength();
    let b = this.state.pop();
    let a = this.state.pop();
    let val = a + b;
    this.state.push(val);
  }
  minus() {
    this.checkLength();
    let b = this.state.pop();
    let a = this.state.pop();
    let val = a - b;
    this.state.push(val);
  }
  times() {
    this.checkLength();
    let b = this.state.pop();
    let a = this.state.pop();
    let val = a * b;
    this.state.push(val);
  }
  divide() {
    this.checkLength();
    let b = this.state.pop();
    let a = this.state.pop();
    let val = a / b;
    this.state.push(val);
  }
}
let calc = new RPNCalculator();
calc.push(10);
calc.push(2);
calc.divide();

console.log(calc.value());

class RPNCalculator1 {
  constructor() {
    this.stack = [];
  }
  push(num) {
    this.stack.push(num);
  }
  value() {
    return this.stack[this.stack.length - 1];
  }
  checkLength() {
    if (this.stack.length < 2) {
      throw "rpnCalculatorInstance is empty";
    }
  }
  plus() {
    this.checkLength();
    let b = this.stack.pop();
    let a = this.stack.pop();
    let val = a + b;
    this.stack.push(val);
  }
  minus() {
    this.checkLength();
    let b = this.stack.pop();
    let a = this.stack.pop();
    let val = a - b;
    this.stack.push(val);
  }
  times() {
    this.checkLength();
    let b = this.stack.pop();
    let a = this.stack.pop();
    let val = a * b;
    this.stack.push(val);
  }
  divide() {
    this.checkLength();
    let b = this.stack.pop();
    let a = this.stack.pop();
    let val = a / b;
    this.stack.push(val);
  }
}

let check = new RPNCalculator1();
check.push(-2.5);
check.push(3.5);
check.plus();
console.log(check.value());
