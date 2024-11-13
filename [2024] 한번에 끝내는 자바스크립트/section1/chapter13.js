let arr = [1, 2, 3, 4, 5];

for (let i of arr) {
  console.log(i);
}

let person = {
  name: "홍길동",
  age: 25,
  height: 180,
};

for (let key in person) {
  console.log(`key : ${key}, value : ${person[key]}`);
}
