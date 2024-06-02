function outerFunction() {
  const a = 2;
  const b = 3;

  function innerFunction() {
    console.log(a, b);
  }

  return innerFunction;
}

const func = outerFunction();
func();
