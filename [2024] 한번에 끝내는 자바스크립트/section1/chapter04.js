// null 병합 연산자
let num1;
let num2 = null;
let num3 = 10;

console.log(num1 ?? 10);
console.log(num2 ?? num3);

// 실제 예시
let name = "현수";
let defaultName = "hyensu";

console.log(undefined ?? defaultName);
console.log(name ?? defaultName);
