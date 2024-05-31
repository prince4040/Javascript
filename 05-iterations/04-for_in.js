const arr = ["Joans", "Peter", "Alice"];

for (let index in arr) {
  console.log(index, arr[index]);
}

const user = {
  name: "Prince",
  age: 21,
};

for (let key in user) {
  console.log(key, user[key]);
}

// doesnot work in map
// const map = new Map();
// map.set("IN", "India");
// map.set("USA", "United States of America");
// map.set("Fr", "France");
// map.set("IN", "India");

// for (let key in map) {
//   console.log(key);
// }
