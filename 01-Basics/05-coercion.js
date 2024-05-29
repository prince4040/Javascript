// *** string and number ***
let result = "5" + 2;
console.log(result); // "52" (number 2 is coerced to string '2')

// console.log("1" + 2); // "12"
// console.log(1 + "2"); // "12"
// console.log("1" + 2 + 2); // "122"
// console.log(1 + 2 + "2"); // 3 + "2" = 32

// console.log(+true); // Number(true) => 1
//console.log(+""); // Number("") => 0

console.log("5" - "2"); // 3

/* Note:
+ => priority will be given to string
- => priority will be given to number
*/

//*** Boolean Coercion ***
const isTrue = !!18;
console.log(isTrue); //true
console.log(!!""); //false

// *** Comparison ***
console.log("5" == 5); //true
console.log("5" === 5); //false

console.log("2" < "1"); //false
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false
