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
