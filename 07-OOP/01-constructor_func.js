// function add(a = 8, b) {
//   return a + b;
// }
// add.info = "Hello world";
// console.log(add.info);

function User(username, password, isLoggedIn) {
  if (!new.target) {
    throw new Error("Contructor must be called with new keyword");
  }

  this.username = username;
  this.password = password;
  this.isLoggedIn = isLoggedIn;
}

User.prototype.getUsername = function () {
  return this.username;
};

const user = new User("prince", "123", true);
console.log(user);
console.log(user.getUsername());
