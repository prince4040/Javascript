const arr = ["Joans", "Peter", "Alice"];

arr.forEach((val, index, arr) => {
  console.log(val, index);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((obj) => {
  console.log(obj.languageName);
});
