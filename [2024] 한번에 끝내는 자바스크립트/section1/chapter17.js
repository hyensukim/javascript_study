//spread
// const toy = {
//   type: "bear",
//   price: 15000,
// };

// const blueToy = {
//   type: "bear",
//   price: 15000,
//   color: "blue",
// };

// const yellowToy = {
//   type: "bear",
//   price: 15000,
//   color: "yellow",
// };

// 위처럼 비슷한 객체를 생성하기 위해서는 중복된 코드를 여러개 작성해줘야 한다.
const toy = {
  type: "bear",
  price: 15000,
};

const blueToy = {
  ...toy,
  color: "blue",
};

const yellowToy = {
  ...toy,
  color: "yellow",
};
console.log(blueToy);
console.log(yellowToy);

const color1 = ["red", "orange", "yellow"];
const color2 = ["blue", "navy", "purple"];

const rainbow = [...color1, "green", ...color2];
console.log(rainbow);

// rest
// 나머지 매개변수
const blueToy2 = {
  type: "bear",
  price: 15000,
  color: "blue",
};

// rest 문법 : 순서가 중요하며, 맨 마지막에 작성해줘야 한다.
// const { type, ...rest } = blueToy2;
// console.log(rest);

const color = ["red", "orange", "yellow", "green"];
// const [c1, c2, ...rest] = color;
// console.log(c1, c2);
// console.log(rest);

const print = (a, b, ...rest) => {
  console.log(a, b, rest);
};

print(1, 2, 3, 4, 5, 6, 7, 8);

const print2 = (...rest) => {
  console.log(rest);
};

const numbers = [1, 2, 3, 4, 5, 6];
print2(...numbers);
