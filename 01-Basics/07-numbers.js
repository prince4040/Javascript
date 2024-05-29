const balance = new Number(35); //using constructor function
console.log(balance);
console.log(balance.valueOf()); // 35

const score = 400;
console.log(score);

console.log(score.toString()); //"400"
console.log(score.toString().length);
console.log(score.toFixed(1)); // "400.0"

const number = 254.6734;
console.log(number.toPrecision(4)); // "254.7"

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); // 10,00,000
