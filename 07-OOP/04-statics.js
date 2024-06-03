class User {
  static count = 0;
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    User.count++;
  }

  static getUserCount() {
    return User.count;
  }
}

// console.log(User.getUserCount()); //0
const user = new User("Prince", "prince@gmail.com", "123");
// console.log(User.getUserCount()); //1

//Behind the Scene
function Userr(username, email, password) {
  Userr.count++;
  this.username = username;
  this.email = email;
  this.password = password;
}

Userr.count = 0;
Userr.getUserCount = function () {
  return Userr.count;
};

console.log(Userr.getUserCount());
const user2 = new Userr("Jonas", "jonas@gmail.com", "125");
console.log(User.getUserCount());
