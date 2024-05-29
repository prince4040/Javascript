"use strict";

// myName = "Prince"; //will throw an error

let name = "Prince";
let age = 20;
let isFullAge = true;
let state;
let temperature = null;
let bigNumber = 125616323n;
let s = Symbol("123");

console.log(typeof undefined); //undefined
console.log(typeof null); //object -> a known bug in js
console.log(typeof bigNumber); //bigint
console.log(typeof s); //symbol

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique
