const arr = ["Joans", "Peter", "Alice"];

for (let val of arr) {
  console.log(val);
}

const user = {
  name: "Prince",
  age: 21,
};

// for (let val of user) {
//   console.log(val);
// }

const name = "Prince";
for (let char of name) {
  console.log(char);
}

//---MAP---
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

for (let [key, value] of map) {
  console.log(key, value);
}
