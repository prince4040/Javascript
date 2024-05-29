console.log(Date); //constructor (not Object literal)

let date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toLocaleString());
console.log(date.toDateString());
console.log(date.toLocaleTimeString());
console.log(typeof date);

let myDate = new Date(2024, 0, 23, 16, 0, 4); //YYYY,M,D,H,M,S
myDate = new Date("2024-1-23 03:05:45 PM"); //Y-M-D H:M:S
myDate = new Date("01-23-2024"); // M-D-Y H:M:S
console.log(myDate.toLocaleString());

console.log(Date.now());
console.log(myDate.getTime());

//get Methods
console.log(myDate.getFullYear());
console.log(myDate.getMonth() + 1);

//set Methods
myDate.setMonth(4);
myDate.setFullYear(2025);
console.log(myDate.toLocaleString());

// define date based on milliseconds
const milliseconds = Date.now();
console.log(new Date(milliseconds));
