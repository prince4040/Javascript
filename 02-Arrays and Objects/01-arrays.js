const arr = [1, 2, 3, 4, 5, 6];
const heros = ["shaktiman", "naagraj"];
console.log(arr);

const arr2 = new Array(1, 2, 3, 4, 5); //using Array constructor

console.log(arr[0]);
console.log(arr["0"]);

//Array Methods
arr.push(7);
arr.unshift(0);
console.log(arr);

arr.pop();
arr.shift();
console.log(arr);

console.log(arr.includes(3));
console.log(arr.indexOf(5));
console.log(arr.join("-")); //gives string

//slice and splice
console.log(arr.slice(0, 4)); // to obtain subarray
console.log(arr.splice(1, 2, "prince", "Rahul")); //affects main arr, returns deleted elements
console.log(arr);
