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

let account = createBankAccount(100);
console.log(account.deposit(50));
console.log(account.withdraw(70));
console.log(account.getBalance());
// console.log(account.withdraw(50));
// console.log(account.getBalance());
