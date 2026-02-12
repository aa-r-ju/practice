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

let manager = createPasswordManager("123");
console.log(manager.checkPassword(123));
console.log(manager.setPassword("Aarju"));
console.log(createPasswordManager());
