// 1. null 병합 연산자
// 존재하는 값을 추려낸 기능
// null, undefined 가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

// var1과 var2를 비교하여 undefined 또는 null 이 아닌 값을 선택.
let var4 = var1 ?? var2;
console.log(var4);

let var5 = var1 ?? var3;
console.log(var5);

// 만약, 둘 다 값이 있는 경우, 상대적으로 왼쪽에 먼저 읽히는 값을 선택.
let var6 = var2 ?? var3;
console.log(var6);

// 실무에서 많이 사용한다.
// 다음 예시에서 unsername이 있는 경우, username을 저장, 없는 경우 userNickname 저장한다.
let userName = "김현수";
let userNickname = "defaultName";
let displayName = userName ?? userNickname;
console.log(displayName);

let userName2;
displayName = userName2 ?? userNickname;
console.log(displayName);

// 2. typeof 연산자
// 값의 타입을 문자열로 반환하는 기능을 하는 연산자
// 자바스크립트는 변수 타입을 지정해놓지 않기 때문에, 수시로 변경이 가능하다.
let var7 = 1;
var7 = "hello";
var7 = 7;
var7 = true;

let t1 = typeof var7;
console.log(t1);

// 3. 삼항 연산자
// 항을 3개 사용하는 연산자
// JS 대부분의 연산자는 단일 또는 이항만 사용한다.
// 특수하게 삼항만 사용한다.
// 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var8 = 7;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝" : "홀";
console.log(res);
