// 1. 묵시적 형 변환
// 자바스크립트 엔진이 알아서 형 변환 해주는 것 - 오류를 피하기 위함.

let num = 10;
let str = "20";

const result = num + str;
console.log(result);

// 2. 명시적 형 변환
// 프로그래머가 내장함수 등을 이용해서 직접 형 변환을 명시하는 것.
// 내장함수 Number(문자열) : 문자열 -> 숫자, 숫자만 포함되는 경우 사용
// parseInt(문자열) : 문자열 -> 숫자, 숫자가 아닌 값이 숫자 뒤에 있더라도 정상적으로 숫자만 파싱해준다.
// 주의할 점은 숫자가 다른 값들보다 앞에 있어야 한다.
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = parseInt(str2);
console.log(strToNum2);

let str3 = "총10개";
let strToNum3 = parseInt(str3);
console.log(strToNum3);

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1);
