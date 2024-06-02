// console.log(Function.__proto__ === Function.prototype);
// console.log(Function.prototype.__proto__ === Object.prototype);
// console.log(Object.__proto__ === Function.prototype);

// console.log(Function instanceof Function);
// console.log(Function instanceof Object);
// console.log(Object instanceof Object);
// console.log(Object instanceof Function);

// const arr = [1, 2, 3, 4];
// console.log(arr instanceof Array);
// console.log(arr.__proto__ === Array.prototype);

const myName = new String("    Prince  ");
console.log(myName.valueOf());

//trueLength
String.prototype.trueLength = function () {
  const str = this.valueOf();
  return str.trim().length;
};

console.log(myName.length);
console.log(myName.trueLength());
