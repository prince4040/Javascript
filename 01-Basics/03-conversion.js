const name = "prince";

// console.log(typeof name);
// console.log(typeof(name))

//*** Type conversion to Number ***
let score = "24";
let valueInNumber = Number(score); //24

score = "Prince";
valueInNumber = Number(score); //NaN (Invalid Number)
console.log(typeof NaN); //number

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
// "" => 0
// null => 0
// undefined => NaN

//*** Type conversion to String ***
const value = 6454;
console.log(String(value)); // "6454"

//*** Type conversion to Boolean ***
/*
Falsy values=> false, 0, "", null, undefined, NaN
*/
const val = "";
console.log(Boolean(NaN));
