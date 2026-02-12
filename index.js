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
