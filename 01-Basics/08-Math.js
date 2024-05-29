console.log(Math); //global object

// console.log(Math.PI);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));
// console.log(Math.trunc(54.6373));

console.log(Math.random());

//generate random number between 1 to 10
console.log(Math.trunc(Math.random() * 10) + 1);

//generate random number between 0 to 10
console.log(Math.trunc(Math.random() * (10 + 1)));

//generate random number between any two nums
function getRandom(min, max) {
  return Math.trunc(Math.random() * (max - min + 1)) + min;
}
