/**
 * 자바스크립트는 자바스크립트 엔진이 있는 모든 곳에서 동작한다.
 * 웹 브라우저 또한 내부에 자바스크립트 엔진이 내장되어 있다.
 * 이처럼 자바스크립트가 실행될 수 있는 환경을 런타임 환경이라고 한다.
 *
 * 자주 사용하는 Plugin - Prettier / live server
 */

const 변수 = 10;
const 문자열 = "11";
const 합 = 변수 + 문자열;
console.log(합);

/**
 * 변수 명명 규칙
 * $,_
 * 제일 앞에 숫자 X
 * 예약어 X
 */

let variable = "변수";
console.log(variable);

const constant = "상수";
// constant = "변할 수 있나?"; // 상수 관련 오류

let variable2 = "1";

// null 병합 연산자
let car = "아우디";
let bicycle;
console.log(car ?? "자전거");
console.log(bicycle ?? "자전거");

// typeof 연산자
console.log(
  typeof 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999n
);

function print() {
  console.log("출력");
}
print();
const noname = function () {
  console.log("노네임");
};
noname();
const arrow = () => {
  console.log("화살표");
};
arrow();

/**
 * 스코프 : 변수와 함수가 영향을 미치는 범위
 *   - 전역 : 전역에서 접근 가능.
 *   - 지역 : 중괄호 내에서만 접근 가능.
 * var 선언자의 경우, 전역으로 등록되므로, 최대한 사용 자제 -> 오류의 원인이 될 수 있음.
 */
let a = 2;
let b = 10;
{
  console.log(b); // 10
  // console.log(a); // 미선언 오류
  let a = 1;
  console.log(a); // 1
}
console.log(a); // 2

/**
 * 변수/함수 호이스팅
 * 가장 상위로 끌어올려지는 것을 의미함.
 *
 * 변수의 호이스팅 : var 선언자 사용 시,  var로 선언된 변수는 호이스팅이 발생한다.
 *   -> 반면에, let과 const는 호이스팅이 발생한 뒤 TDG(임시 데드존)에 저장되므로, 선언된 라인 밑에서 사용이 가능하다.
 * 함수의 호이스팅 : 함수는 어디에 정의하든, 호이스팅이 발생하여, 전역에서 사용 가능하다.
 */

{
  var tmp1 = 10;
  let tmp2 = 20;
}
console.log(tmp1);
//console.log(tmp2);

/**
 * 자바스크립트 내 원시타입이 아닌 것을 객체형 변수라고 한다.
 * 이 안에는 배열, 객체가 있다.
 */
const obj = {
  key: "value",
};
console.log(obj.key);
console.log(obj["key"]);
/**
 * 객체는 한번에 연관된 여러 데이터를 저장하기 위한 자료형을 의미한다.
 * 객체 생성 방식으로는 생성자식과 리터럴이 존재한다.
 */

const obj2 = new Object();
obj2.key2 = "value2";
console.log(obj2.key2);
console.log(obj2["key2"]);

/**
 * 배열
 * 비원시 타입
 * 객체와 다르게 순서가 있는 데이터들의 집합을 의미한다.
 * 배열과 객체의 차이점
 * - 리터럴
 * - 요소 형태
 * 배열 생성
 * - 배열 생성자 함수
 * - 배열 리터럴
 * 배열 사용
 * - 요소 선택
 * - 추가
 * - 삭제
 * - 길이
 */
const arr = ["1", "2", "3"];
console.log(arr);
console.log(arr[0]);
arr.push("4");
console.log(arr[3]);
console.log(arr.at(-1)); // 마지막 요소 선택
console.log(arr.pop());
console.log(arr);
console.log(arr.length);

/**
 * 생성자 함수
 * 일반적으로 동일한 구조의 객체를 쉽게 생성하기 위해서 사용된다.
 */
const ob = {
  name: "이름1",
  age: 25,
};

const person = new Object(ob);
console.log(person);
person.height = 150;

console.log(person);
delete person["height"];
console.log(person);

for (let k in person) {
  console.log(`key : ${k} value : ${person[k]}`);
}

for (let e of ["1", "2", "3", "4", "5"]) {
  console.log(e);
}

const array = [];
array.push("1");
console.log(array);

array.unshift("2");
console.log(array);

console.log(array.at(-1));

console.log(array.includes("1"));
console.log(array.includes("3"));

console.log(array.indexOf("1"));
console.log(array.indexOf(1));

const objArray = [
  {
    name: "이름1",
    age: 30,
  },
  {
    name: "이름2",
    age: 20,
  },
  {
    name: "이름3",
    age: 35,
  },
];
console.log(objArray.findIndex((e) => e.name === "이름2"));
console.log(objArray.findIndex((e) => e.age > 30));

console.log(objArray.find((e) => e.name === "이름3"));
console.log(objArray.filter((e) => e.age === 30));
console.log(objArray.slice(0, 2));

const ar = [1, 2, 3];
const ar2 = [4, 5, 6];
console.log(ar.concat(ar2));
console.log(ar.join(">"));

const ar3 = [1, 4, 2, 5, 3, 6];
ar3.sort((a, b) => b - a);
console.log(ar3);

const sum = ar3.reduce((att, cur, arr) => (att += cur));
console.log(sum);

console.log(Array.isArray(ar3));
console.log(Array.isArray(ar3.join(",")));

const arrForSep = [1, 2, 3, 4, 5, 6];
const [n1, n2, n3, n4, n5, n6] = arrForSep;
console.log(n1, n2, n3, n4, n5, n6);

const objForSep = {
  k1: "v1",
  k2: "v2",
  k3: "v3",
};
const { k1, k2, k3 = 10, k4 = "gooooooooooooooo" } = objForSep;
console.log(k1, k2, k3, k4);

objForSep.k5 = "v5";
console.log(objForSep);

let va = 10;
let vb = 20;
[va, vb] = [vb, va];
console.log(va, vb);

// spread : ...객체/배열명, rest : 나머지
const spreadObj = {
  name: "현수",
  age: 29,
  gender: "남",
};

const hobbyObj = {
  ...spreadObj,
  hobby: "러닝",
};
console.log(hobbyObj);

const color = ["빨", "주", "노"];
const color2 = ["파", "남", "보"];
const rainbow = [...color, "초", ...color2];
console.log(rainbow);

function mixColor(c1, ...rest) {
  let mixcolor = "";
  for (const r of rest) {
    mixcolor += r;
  }
  console.log(mixcolor);
}

mixColor(...rainbow);

function printAll(...rest) {
  console.log(rest);
}
printAll(...rainbow);
