/*
  GECO: {
    VO: {
      z : uninitialized
      c : undefined
      add: function(a,b){}
    }
  }
*/

// const and let are block scoped but var keyword is function scoped

const z = "hello";

if (true) {
  const a = 2;
  let b = 3;
  var c = 3; //hoised with undefined
}

// console.log(a); //error -> not defined
// console.log(b) //error
console.log(c);

function add(a, b) {
  var insideFunction = 265;
  return a + b;
}

// console.log(insideFunction); //error
