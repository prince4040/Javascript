const accountId = "1541638"; //immmutable

let age = 20; //mutable
age = age + 1;

accountPassword = "123456"; //not recommended

/* prefer not to use var 
because of issue in block scope and function scope 
*/
var city = "surat";

console.table([accountId, age, city]);
