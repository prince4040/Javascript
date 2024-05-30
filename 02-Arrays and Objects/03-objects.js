const sym = Symbol("123");
const myAge = 21;

const user = {
  name: "Prince",
  "full name": "Prince Saliya",
  age: myAge,
  location: "surat",
  email: "prince@gmail.com",
  hasDriversLicense: true,
  friends: ["Jonas", "Peter", "Alice"],

  [sym]: "Symbol",
  555: "Number-Key",
};

// console.log(user);
console.log(user.name);
console.log(user["full name"]);
console.log(user[sym]);
console.log(user.age);
console.log(user[555], user["555"]);
console.log(user.friends[0]);

// Object.freeze(user);
// user.email = "prince@google.com";
// console.log(user);

user.greet = function () {
  console.log(`Hello, I'm ${this.name}`);
};

user.greet();
