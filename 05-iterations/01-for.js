// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

const arr = ["Joans", "Peter", "Alice"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//Nested for loop
// for (let i = 1; i <= 3; i++) {
//   console.log(`Round ${i}`);
//   for (let e = 1; e <= 5; e++) {
//     console.log(`exercise ${e}`);
//   }
// }

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//    console.log(`Value of i is ${index}`);

// }

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is ${index}`);
}
