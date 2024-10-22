// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환.

let arr1 = [
  { name: "김현수", hobby: "테니스" },
  { name: "홍길동", hobby: "테니스" },
  { name: "각시탈", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");

console.log(tennisPeople);

// 특정 조건을 필요로하는 검색 등에 많이 활용되므로, 꼭 기억하기!

// 2.map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];

const mappedArr = arr2.map((item, idx, arr) => {
  return item * 2;
});

// 이처럼 콜백함수가 반환한 결과값을 새로운 배열로 만들어 반환.
console.log(mappedArr);

// map 활용 사례
// arr1에 이름들만 추출하여 새로운 배열을 만드는 기능 구현.
let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["a", "c", "b"];
arr3.sort(); // 자동 정렬

console.log(arr3);

// 주의할 점은 기본 sort 메서드는 사전순으로 정렬하기 때문에, 숫자형 정렬이 어렵다.
// 숫자는 대소비교가 필요하기 때문!
// 이를 위해서는 대소 비교를 위한 콜백함수를 사용해줘야 한다.
let arr4 = [10, 3, 5];
arr4.sort();
console.log(arr4);
// 오름차순 정렬
arr4.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 와라
    return 1;
  } else if (a < b) {
    // a가 b 앞에 와라
    return -1;
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }
});
console.log(arr4); // 정상적으로 정렬

//내림차순 정렬
arr4.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return +1;
  } else {
    return 0;
  }
});
console.log(arr4);

// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();
console.log(arr5);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
// 구분자는 join 메서드의 인자를 통해 다르게 사용할 수 있다.
let arr6 = ["hi", "im", "windterlood"];
const joined = arr6.join("~");
console.log(joined);

let arr99 = [2, 3, 1, 4, 6, 5];
arr99.sort();
console.log(arr99);
