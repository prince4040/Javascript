const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// arr1.push(arr2);
// console.log(arr1);

// arr1.push(...arr2);
// console.log(arr1);

const arr = arr1.concat(arr2);
console.log(arr);

const newArray = [...arr1, ...arr2];
console.log(newArray);

const anotherArray = [1, 2, [3, 4, [5, 6]]];
console.log(anotherArray.flat(Infinity));

// Array constructor methods
console.log(Array.isArray("Prince"));
console.log(Array.from("Prince"));
console.log(Array.from({ name: "Prince" }));
console.log(Array.of(1, 2, 3, 4));
