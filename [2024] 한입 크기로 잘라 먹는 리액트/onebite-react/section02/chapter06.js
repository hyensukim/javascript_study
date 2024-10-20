// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 배열도 객체라고 했다. 모든 배열 안에는 length 라는 프로퍼티가 기본으로 존재한다.
// 따라서, 인덱스와 length 프로퍼티로 순회가 가능하다.

// 1.2 for of 반복문 - 자바 향상된 for문과 동일한 기능.
// 인덱스를 사용한 로직은 사용 불가.
for (let item of arr) {
  console.log(item);
}

// 2. 객체 순회
let obj = {
  a: 1,
  b: 2,
  c: 3,
};

// 2-1. Object.keys 사용
// 객체에서 key 값들만 뽑아서 새로운 배열로 반환.
let keys = Object.keys(obj);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}

for (let key of keys) {
  const value = obj[key];
  console.log(key, value);
}

// 2-2. Object.values
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환.
let values = Object.values(obj);
for (let value of values) {
  console.log(value);
}

// 2-3. for in
for (let key in obj) {
  const value = obj[key];
  console.log(key, value);
}

// 주의할 점 : for of - 배열 순회/ for in - 객체 순회 구분할 것!
