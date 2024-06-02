function add(a, b) {
  console.log(arguments);
  return a + b;
}

add(2, 3);

const sum = function (a, b) {
  console.log(arguments);
  return a + b;
};

sum(4, 5);

// So function declaration and function expression gets "argumets" object but arrow function dont get default behaviour of argument object

const sum2 = (a, b) => {
  console.log(arguments);
  return a + b;
};
sum2(6, 7);
