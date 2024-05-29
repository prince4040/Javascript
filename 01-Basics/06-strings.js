const name = "Prince";
const age = 21;

console.log(name + " is " + age + " years old.");
console.log(`${name} is ${age} years old.`); //template literal

const gameName = new String(`clash of clans`); //Wrapper class
console.log(gameName[0]);
console.log(gameName.__proto__); // === String.prototype
console.log(gameName instanceof String); //true

//methods
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.at(1)); // name[1]
console.log(name.charAt(1));
console.log(name.indexOf("i"));
console.log(name.includes("c"));

let newName = name.substring(0, 4); // "Prin" (0,1,2,3)
console.log(newName);
newName = name.slice(1, -2); // "rin"
console.log(newName);

const newString = "    Prince    ";
console.log(newString.trim());

const url = "https://prince.com/prince%20saliya";
const newUrl = url.replace("%20", "-");
console.log(newUrl);

console.log(newUrl.split("-"));
console.log(name.split(""));
