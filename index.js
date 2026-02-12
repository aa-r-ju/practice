function createPasswordManager(str) {
  let password = str;
  console.log(password);
  return {
    checkPassword: function (input) {
      return input === password;
    },
    setPassword: function (newPass) {
      password = newPass;
    },
  };
}

function createBankAccount(value) {
  let balance = value;
  return {
    deposit: function (add) {
      balance += add;
    },
    withdraw: function (minus) {
      if (minus <= balance) {
        balance -= minus;
      }
    },
    getBalance: function () {
      return balance;
    },
  };
}

function createSecretCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
    },
    reveal: function () {
      return count;
    },
  };
}

function createLogger(num) {
  let arr = [];
  return {
    log: function (value) {
      if (arr.length < num) {
        arr.push(value);
      }
    },
    getLogs: function () {
      return arr.slice();
    },
  };
}
let pum = createLogger(6);
console.log(pum);
console.log(pum.log("a"));
console.log(pum.log("b"));
console.log(pum.log("c"));
console.log(pum.log("d"));
console.log(pum.log("e"));
console.log(pum.log("f"));
console.log(pum.getLogs());
