//typeof
let num = 10;

console.log(typeof num);

//숫자형
let num1 = 125;
let num2 = 10.000012;
console.log(typeof num1);
console.log(typeof num2);

let num3 = 100 / 0;
console.log(typeof num3); // infinity

let num4 = NaN;
console.log(typeof num4); // NaN

let num5 = "asdf" / 10;
console.log(num5);

//BigInt : 2^53-1 크거나 -(2^53-1)보다 작은 수
let bigNum1 = 999999999999999999999999999999999999999999999999999999n;
let bigNum2 = BigInt(999999999999999999999999999999999999999999999999999999);
console.log(typeof bigNum1);
console.log(typeof bigNum2);

// 문자열
// 문자열 리터럴 : "", '', ``(템플릿 리터럴)
let name = "hyensu";
let intro = `제 이름은 ${name} 입니다.`; // 템플릿 리터럴 : 내장된 표현식을 허용하는 문자열 리터럴.
console.log(intro);

// boolean - true/false
let isClicked = false;

// Null - 존재하지 않을 경우 수동으로 할당하는 값
let nulls = null;
console.log(typeof nulls); //object -> 오류
console.log(nulls === null);

//undefined - 변수에 값이 할당되지 않을 경우 자동 할당되는 값
let unde;
console.log(unde); //undifined

// 묵시적 형변환
let num6 = "15";
let num7 = "5";
console.log(num6 / num7);

// 명시적 형변환
let num8 = "15";
let num9 = 5;
console.log(parseInt(num8) + num9); // JS 내장함수
