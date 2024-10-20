// 1. Spread 연산자
let arr1 = [1, 2, 3];
let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];
console.log(arr2);
// 위처럼 정의하는 방식은 위험한 방법이다. 중간에 배열의 값들이 변경될 수 있기 때문이다.
// 이를 방지하고자 Spread 연산자를 사용해준다.
let arr3 = [4, ...arr1, 5, 6];
console.log(arr3);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  a: obj1.a,
  b: obj1.b,
  c: 3,
  d: 4,
};

console.log(obj2);

let obj3 = {
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj3);

// 인자로 배열을 흩뿌릴때에도 Spread 연산자를 활용할 수 있다.
function funcA(a, b, c) {
  console.log(a, b, c);
}

funcA(...arr1);

// 2. Rest 매개변수
// 나머지 매개변수
// 배열 형태로 한번에 받아온다.
// 주의할 점 : rest 매개변수 뒤에는 새로운 매개변수가 올 수 없다. 논리적으로도 나머지 뒤에 새로운 값이 오는게 어색하다.
function funcB(one, two, three, ...rest) {
  console.log(one);
  console.log(rest);
}
funcB(...arr1);
