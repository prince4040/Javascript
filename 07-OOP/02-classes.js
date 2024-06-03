class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  changeUsername(username) {
    this.username = username;
  }
}

const user = new User("Prince", "prince@gmail.com", "123");
console.log(user);
user.changeUsername("prince");
console.log(user);

// behind the Scene
function USER(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

USER.prototype.changeUsername = function (username) {
  this.username = username;
};

const user2 = new USER("Jonas", "jonas@gmail.com", "897");
console.log(user2);
