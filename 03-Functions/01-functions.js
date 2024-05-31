function add(num1, num2) {
  return num1 + num2;
}

console.log(add(2, 3));

function loginUser(username = "sam") {
  if (!username) {
    return console.log("Please enter username");
  }
  console.log(`${username} just logged in`);
}

loginUser("Prince");

const sum = function (num1, num2, ...nums) {
  console.log(nums);
  let ans = num1 + num2;
  for (let i = 0; i < nums.length; i++) {
    ans += nums[i];
  }
  return ans;
};

console.log(sum(1, 2, 3));

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue([200, 400, 500, 1000]));
