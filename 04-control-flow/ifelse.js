const age = 21;

if (age >= 18) {
  console.log("You can drive");
} else {
  console.log(`You can't drive`);
}

const balance = 1000;
if (balance > 1000) console.log("hello"), console.log("world");

const loggedIn = true;
const hasDebitCard = true;
const loggedInViaGoogle = true;
const loggedInViaEmail = false;

if (loggedIn && hasDebitCard && (loggedInViaGoogle || loggedInViaEmail)) {
  console.log("You can buy");
} else if (hasDebitCard && !loggedIn) {
  console.log("LogIn first");
} else {
  console.log(`You can't buy`);
}
