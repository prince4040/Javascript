// "use strict";

// In Global Execution Context
console.log(this); // window, {} (in Node)

//function declaration
function func() {
  console.log(this);
}
func();

//Arrow function
const funcArrow = () => {
  console.log(this);
};
funcArrow();

//Method of object
const user = {
  name: "Prince",

  greet: function () {
    console.log(this);
    console.log(this.name);
  },
};
user.greet();

//constructor function
function Car(name, model) {
  this.name = name;
  this.model = model;
}

const car = new Car("BMW", "x5");
console.log(car);
