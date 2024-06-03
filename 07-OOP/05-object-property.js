const user = {
  username: "Prince",
  age: 21,
  email: "hello@gmail.com",
};

console.log(Object.getOwnPropertyDescriptor(user, "age"));
Object.defineProperty(user, "age", {
  writable: false,
});

user.age = 34;
console.log(user.age);
// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

Object.defineProperty(user, "email", { enumerable: false });

for (let key in user) {
  console.log(key);
} // it will skip email key

for (let [key, value] of Object.entries(user)) {
  console.log(key, value);
}
