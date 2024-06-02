function add(num1, num2) {
  const a = 2;
  const b = 3;

  function func() {
    const a = 99;
    console.log(a, b);
  }

  func();
  console.log(a);

  return num1 + num2;
}

add(2, 3);
