//  5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

// forEach와 콜백함수로 모든 배열 요소에 반복 처리 가능.
arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr);

// 2. includes
// 배열 안에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);
console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 동일한 요소가 존재할 경우 앞에서부터 탐색하기 때문에 앞에 있는 idx를 반환.
// 해당 요소가 존재하지 않을 경우, -1을 반환.
let arr3 = [1, 1, 1];
let idex = arr3.indexOf(2);
console.log(idex);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex1 = arr4.findIndex((item) => {
  if (item % 3 === 0) {
    return true;
  }
});
console.log(findedIndex1);

// 간소화
const findedIndex2 = arr4.findIndex((item) => item === 0);
console.log(findedIndex2);

// findIndex가 존재하는 이유는 객체 타입의 요소들을 찾기 위함이다.
// 즉, indexOf로는 객체 타입의 요소를 찾아낼 수 없다.
let objArr = [{ name: "홍길동" }, { name: "각시탈" }];

console.log(objArr.indexOf({ name: "이정환" }));
// -1이 반환된다. 이는 indexOf로는 얕은 비교를 하기 때문에, 프로퍼티 값으로 비교를 할 수 없다.
// 따라서, 이러한 경우 findIndex를 사용하는 것이다.
console.log(objArr.findIndex((item) => item.name === "홍길동"));
// 즉, 단순한 원시타입은 indexOf, 객체타입은 findIndex를 사용하면 된다.

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 그 요소를 그대로 반환함.
let arr5 = [{ name: "홍길동" }, { name: "각시탈" }];

const finded = arr5.find((item) => item.name === "각시탈");

console.log(finded); // 찾은 요소 자체를 반환함.
