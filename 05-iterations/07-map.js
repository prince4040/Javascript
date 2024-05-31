const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arr = numbers.map((val) => val + 10);
console.log(arr);

const newArr = numbers.map((val) => val + 10).filter((val) => val >= 15);
console.log(newArr);
