// 🔥 Question 6 (object mutation trap)
const users = [
  { name: "Aarju", age: 20 },
  { name: "Bibek", age: 21 },
];

const result = users.map((user) => {
  user.age += 1;
  return user;
});

console.log(users);

Question;

// Did map() mutate the original array? Why or why not?
//ans => Map is non-mutating in terms of array structure, but mutating objects inside it will change the original elements if you’re modifying references.
