class User {
  constructor(username) {
    this.username = username;
  }

  getUsername() {
    return this.username;
  }
}

class InstaUser extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  changeUsername(username) {
    this.username = username;
  }
}

const user = new InstaUser("Prince", "prince@gmail.com", "123");
console.log(user);

// Behind the Scene
function USER(username) {
  this.username = username;
}

USER.prototype.getUsername = function () {
  return this.username;
};

function INSTAUSER(username, email, password) {
  USER.call(this, username);
  this.email = email;
  this.password = password;
}

INSTAUSER.prototype.changeUsername = function (username) {
  this.username = username;
};

INSTAUSER.prototype.__proto__ = USER.prototype;
INSTAUSER.__proto__ = USER;

const user2 = new INSTAUSER("Jonas", "jonas@gmail.com", "365");
console.log(user2);
