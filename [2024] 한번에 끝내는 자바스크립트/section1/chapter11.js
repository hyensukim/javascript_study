let arr = new Array(1, 2, 3);
arr.push(10);
console.log(arr);

let arr2 = new Array(3); // 배열의 크기 지정
console.log(arr2);

// 배열 생성 : 리터럴
// 배열 내에는 다양한 타입의 값을 담을 수 있다.
let arr3 = [1, 2, 3];
let arr4 = [3];

console.log(arr3);
console.log(arr4);

// 배열 요소 접근 - 순서 O, index O(0부터 시작)
let array = [1, "hello", null];
console.log(array[0]);
console.log(array[1]);
console.log(array[array.length - 1]);

const fruits = ["apple", "orange", "peach"];
fruits.push("grape");
console.log(fruits);

fruits.unshift("watermelone"); // 맨 앞에 값을 추가 시 사용
console.log(fruits);

const animal = ["cat", "dog", "hanster"];
animal[2] = "parret";

console.log(animal);

const colors = ["red", "blue", "purple", "skyblue"];
console.log(colors);
colors.pop();
console.log(colors);
colors.splice(1, 3);
console.log(colors);

console.log(colors.length);
