let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("\n");

// forEach
arr.forEach((cur, idx, arr) => {
  console.log(`${idx}번째 요소는 ${cur} 입니다.`);
  console.log(arr);
});
console.log("\n");

// map
let newArray = arr.map((cur) => {
  return cur * 10;
});
console.log(newArray);
console.log("\n");

let colors = ["green", "blue", "purple"];
// at
console.log(colors.at(-1)); // 배열의 맨 마지막을 확인할 때 -1
console.log("\n");

// includes
console.log(colors.includes("blue"));
console.log(colors.includes("yellow"));
console.log(colors.includes("blue", 2)); // 두번째 인자는 탐색 시작값 idx 2부터 끝까지 확인
console.log(colors.includes("blue", 1));
console.log("\n");

//indexOf
console.log(colors.indexOf("purple"));
console.log(colors.indexOf("black")); // -1 반환
console.log(colors.indexOf("blue", 1));
console.log("\n");

// findIndex
let animals = [{ name: "cat" }, { name: "dog" }, { name: "cow" }];

let idx = animals.findIndex((e) => e.name == "dog");
console.log(idx);
console.log("\n");

// find
let element = animals.find((e) => e.name === "cow");
console.log(element);
element = animals.find((e) => e.name === "bird"); // undefined
console.log(element);
console.log("\n");

// filter
let colors2 = [
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
  { id: 3, color: "purple" },
  { id: 4, color: "yellow" },
];

let filterArray = colors2.filter((cur, idx, arr) => cur.id > 1);
console.log(filterArray);
console.log("\n");

// slice
let sliceArray = colors2.slice(1, 3); // start 미포함 end 포함
console.log(sliceArray);
console.log("\n");

// concat
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);
console.log("\n");

// join
const str = arr3.join("💡");
console.log(str);
console.log("\n");

// sort
const arr4 = [3, 2, 10, 5, 7];
const compare = (a, b) => b - a;
arr4.sort(compare);
console.log(arr4);
console.log("\n");

// reduce
const array = [10, 20, 30, 40, 50];
const sum = array.reduce((acc, cur, idx) => (acc += cur));
console.log(sum);
console.log("\n");

// isArray
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray({}));
console.log(Array.isArray(" "));
console.log(Array.isArray(undefined));
