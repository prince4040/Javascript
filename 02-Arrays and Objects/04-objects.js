const user = {
  name: "Prince",
  address: {
    houseNo: 17,
    street: "kunj nagar",
    area: "varachha",
    city: "surat",
  },
};

console.log(user.address.street);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj = { obj1, obj2 };
// console.log(obj);

// const obj = Object.assign({}, obj1, obj2);
// console.log(obj);

// const obj = { ...obj1, ...obj2 };
// console.log(obj);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty("name"));
