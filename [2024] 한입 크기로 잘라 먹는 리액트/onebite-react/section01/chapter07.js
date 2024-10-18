// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10;
console.log(num6);

// 3. 복합 대입 연산자
let num7 = 10;
num7 = num7 + 20;
num7 -= 20;
console.log(num7);

// 4. 증감 연산자 - 전위 / 후위
let num8 = 10;
num8++;
console.log(num8++);
console.log(num8);

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;
console.log(or, and, not);

// 6. 비교 연산자
// 동등 / 비동등
let comp1 = 1 === 2;
let comp2 = 1 !== 2;
let comp3 = 1 == 2;
let comp4 = 1 != 2;
let comp5 = 1 == "1"; // 값만 비교
let comp6 = 1 === "1"; // 값과 타입 비교
console.log(comp1, comp2, comp3, comp4, comp5, comp6);

// 대소
let comp7 = 2 > 1;
let comp8 = 2 < 1;
console.log(comp7, comp8);

let comp9 = 2 >= 2;
let comp10 = 2 <= 2;
console.log(comp9, comp10);
