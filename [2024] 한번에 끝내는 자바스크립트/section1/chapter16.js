console.log("안녕");
let colors = ["green", "blue", "purple"];

let c1 = colors[0];
let c2 = colors[1];
let c3 = colors[2];

console.log(c1, c2, c3);

let [c4, c5, c6] = colors;
console.log(c4, c5, c6);

let [c7, c8, c9] = ["green", "blue", "purple"]; // 선언 분리 할당
console.log(c7, c8, c9);

let [c10, c11, c12, c13] = ["green", "blue", "purple"];
console.log(c10, c11, c12, c13); // 배열의 길이보다 많은 변수에 할당 시 남은 변수에 undefined로 초기화.

// 기본값 설정
let [c14, c15, c16 = "yellow"] = ["blue", "purple"];
console.log(c14, c15, c16);

// 두 변수의 값의 교환을 위한 방법
let a = 10;
let b = 5;
console.log(a, b);

[a, b] = [b, a];
console.log(a, b);

let objColors = {
  color1: "green",
  color2: "blue",
  color3: "purple",
};

let a1 = objColors.color1;
let a2 = objColors.color2;
let a3 = objColors.color3;

console.log(a1, a2, a3);

// let { color1, color2, color3 } = objColors;
// console.log(color1, color2, color3);

// 키 값이 다른 경우, clone
let { color1: v1, color2: v2, color3: v3 } = objColors;
console.log(v1, v2, v3);

// 기본값 설정
let { color1, color2, color3, color4 = "yellow" } = objColors;
console.log(color1, color2, color3, color4);
