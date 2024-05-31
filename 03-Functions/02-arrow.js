const user = {
  name: "Prince",
  age: 21,

  greet: function () {
    console.log(this);
    console.log(this.name);
  },
};

user.greet();

const arrow = () => {
  console.log(this);
};
arrow();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "hitesh" });

console.log(addTwo(3, 4));
