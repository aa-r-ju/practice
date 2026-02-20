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
