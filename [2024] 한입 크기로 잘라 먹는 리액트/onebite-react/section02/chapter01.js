//  1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // 매우 큰 인티저 값

if (!f7) {
  console.log("Falsy");
}

// 2. Truthy 한 값
// -> 7가지 Falsy한 값들을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t5) {
  console.log("Truthy");
}

// 3. 활용 사례

function printName(person) {
  // 조건이 많아질수록 복잡해짐.
  //   if (person === undefined || person == null) {
  // 이를 방지하고자 falsy 사용해보자.
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}
// let person = { name: "김현수" };
let person; // 실제 객체를 받을 것이라고 예상했지만, 실제 undefined가 인자 전달.
// 이를 방지하고자, 함수 내에서 조건문으로 처리해준다.
printName(person);
