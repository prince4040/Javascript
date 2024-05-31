const emails = [];

//wrong way
// if (emails) {
//   console.log("Got emails");
// } else {
//   console.log("No email found");
// }

//falsy values: false, 0, "", undefined, null, NaN
// Rest all are truthy values

if (emails.length) {
  console.log("Got emails");
} else {
  console.log("No email found");
}

const obj = {};

if (Object.keys(obj).length) {
  console.log("Object is not empty");
} else {
  console.log("Object is empty");
}

// ?? operator (to ignore null and undefined)
let val = 5 ?? 10;
val = null ?? undefined ?? 10;
console.log(val);
